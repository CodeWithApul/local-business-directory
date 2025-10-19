import { useEffect, useState } from "react";

import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

import BusinessCard from "../components/BusinessCard";
import HeroSection from "../components/HeroSection";
import {
  dummyBusiness,
  dummyLocations,
  type IBusiness,
} from "../data/dummyData";
import SearchBar from "../components/SearchBar";
import { useUserLocation, type Location } from "../hooks/useUserLocation";

// Step 1: Extract unique categories
const uniqueCategories = Array.from(
  new Set(dummyBusiness.map((b) => b.category))
);

// Step 2: Sort alphabetically
const sortedCategories = uniqueCategories.sort((a, b) => a.localeCompare(b));

// Step 3: Add "All" at the beginning
const searchCategories = ["All", ...sortedCategories];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermCategory, setSearchTermCategory] = useState("All");
  const [filteredBusiness, setFilteredBusiness] =
    useState<IBusiness[]>(dummyBusiness);

  const { location, detectLocation, updateLocation } = useUserLocation();
  // console.log(location);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (term: string) => setSearchTerm(term);
  const handleCategoryChange = (category: string) =>
    setSearchTermCategory(category);
  const handleSearchClick = () => {
    const filteredBusiness = dummyBusiness.filter((b) => {
      const matchesCategory =
        searchTermCategory === "All" || b.category == searchTermCategory;
      const matchesKeyword = b.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesKeyword;
    });
    setFilteredBusiness(filteredBusiness);
  };
  useEffect(() => {
    if (location?.source === "auto") {
      toast.success(`Location auto-detected: ${location.city}`);
    }
    setLoading(false);
  }, [location]);

  //   <FeaturedBusinesses />
  const dummyCity = dummyLocations.map((c) => c.city);

  const getLocationDetails = (name: string): Location | undefined =>
    dummyLocations.find(
      (loc) => loc?.city?.toLowerCase() === name.toLowerCase()
    );

  return (
    <>
      <HeroSection city={location?.city} />
      <Container>
        <Typography variant="h4" sx={{ my: 1 }} gutterBottom>
          Local Business Directory
        </Typography>
        “Showing results for {location?.city} (auto-detected). Want to change?”
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
          options={dummyCity}
          value={location?.city || ""}
          onChange={(_e, newCity) => {
            // console.log(e, newCity);
            const newLocation = getLocationDetails(newCity);
            if (newLocation) updateLocation(newLocation);
            else detectLocation();
          }}
          renderInput={(params) => (
            <TextField {...params} label="Choose your area" />
          )}
          disableClearable
        />
        <SearchBar
          category={searchTermCategory}
          onCategoryChange={handleCategoryChange}
          keyword={searchTerm}
          onKeywordChange={handleSearchChange}
          categories={searchCategories}
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
