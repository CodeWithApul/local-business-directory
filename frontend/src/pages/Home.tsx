import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDebouncedCallback } from "use-debounce";

import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import BusinessCard from "../components/BusinessCard";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import { dummyBusiness } from "../data/dummyData";
import { useUserLocation } from "../hooks/useUserLocation";
import { getMatchedRecords } from "../services/businessService";
import { getCategories } from "../services/categoryService";
import { getAutocompleteSuggestions } from "../services/locationService";

import type { Category } from "../services/categoryService";
import type { IBusiness } from "../data/dummyData";
import type { Location } from "../hooks/useUserLocation";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [listofCategories, setListOfCategories] = useState<Category[]>([]);
  const [searchTermCategory, setSearchTermCategory] = useState<Category | null>(
    {
      id: 0,
      name: "All",
    }
  );
  const [searchedLocations, setSearchedLocations] = useState<Location[]>([]);
  const [filteredBusiness, setFilteredBusiness] =
    useState<IBusiness[]>(dummyBusiness);

  const { location, detectLocation, updateLocation } = useUserLocation();
  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setListOfCategories(categories);
    })();
  }, []);
  const [loading, setLoading] = useState(false);
  const debounced = useDebouncedCallback(async (value) => {
    if (value.length < 3) return;
    const res: Location[] = await getAutocompleteSuggestions(value);
    setSearchedLocations(res);
  }, 1000);

  const handleSearchChange = (term: string) => setSearchTerm(term);
  const handleCategoryChange = (categoryId: number) => {
    const category = listofCategories.find((c) => c.id === categoryId) || null;
    setSearchTermCategory(category);
  };
  const handleSearchClick = async () => {
    const filteredBusiness = dummyBusiness.filter((b) => {
      const matchesCategory =
        searchTermCategory?.name === "All" ||
        b.category == searchTermCategory?.name;
      const matchesKeyword = b.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesKeyword;
    });
    const business = await getMatchedRecords({
      latitude: location?.lat,
      longitude: location?.lng,
      radiusKm: 20,
      categoryId:
        searchTermCategory?.id === 0 ? undefined : searchTermCategory?.id,
      keyword: searchTerm,
    });
    setFilteredBusiness(business.length ? business : filteredBusiness);
  };
  useEffect(() => {
    if (location?.source === "auto") {
      toast.success(`Location auto-detected: ${location.displayName}`);
    }
    setLoading(false);
  }, [location]);

  //   <FeaturedBusinesses />
  const defaultCityList = [
    ...(location?.displayName ? [location.displayName] : []), // Include current city if not already in the list
    ...(searchedLocations.map((c) => c.displayName) || []).filter(
      (city) => city?.toLowerCase() !== location?.displayName?.toLowerCase()
    ), // Exclude current city
  ];

  const getLocationDetails = (name: string): Location | undefined =>
    searchedLocations.find(
      (loc) => loc?.displayName?.toLowerCase() === name.toLowerCase()
    );

  return (
    <>
      <HeroSection city={location?.displayName} />
      <Container>
        <Typography variant="h4" sx={{ my: 1 }} gutterBottom>
          Local Business Directory
        </Typography>
        “Showing results for {location?.displayName} (auto-detected). Want to
        change?”
        <Button
          onClick={() => {
            detectLocation();
            setLoading(!loading);
          }}
          disabled={loading}
        >
          📍 Use My Location
        </Button>
        <Autocomplete
          options={defaultCityList}
          value={location?.displayName || ""}
          onChange={(_e, newCity) => {
            const newLocation = getLocationDetails(newCity);
            if (newLocation) updateLocation(newLocation);
            else detectLocation();
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose your area"
              onChange={(e) => debounced(e.target.value)}
            />
          )}
          disableClearable
        />
        <SearchBar
          category={searchTermCategory}
          onCategoryChange={handleCategoryChange}
          keyword={searchTerm}
          onKeywordChange={handleSearchChange}
          categories={listofCategories}
          onSearch={handleSearchClick}
        />
        <Grid container rowSpacing={2} columnSpacing={2}>
          {filteredBusiness.map((b) => (
            <Grid key={b.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <BusinessCard
                name={b.name}
                category={b.category}
                id={b.id}
                logo={b.logo}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;

// Components to Create:
// Header.tsx — logo, nav links <-- DONE
// HeroSection.tsx — intro banner <-- DONE
// SearchBar.tsx — keyword + category filter <-- DONE
// FeaturedBusinesses.tsx — grid of top listings
// Footer.tsx — contact info, links
