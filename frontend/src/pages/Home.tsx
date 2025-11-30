import { useEffect, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
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

// import { getAutocompleteSuggestions } from "../services/locationService";

import type { Category } from "../services/categoryService";
import type { IBusiness } from "../data/dummyData";
// import type { Location } from "../hooks/useUserLocation";
function Home() {
  const [listofCategories, setListOfCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setListOfCategories(categories);
    })();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermCategory, setSearchTermCategory] = useState<Category | null>(
    {
      id: 0,
      name: "All",
    }
  );
  const [filteredBusiness, setFilteredBusiness] =
    useState<IBusiness[]>(dummyBusiness);

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

  const { location, detectLocation, updateLocation } = useUserLocation();
  // const [searchedLocations, setSearchedLocations] = useState<Location[]>([]);

  const [loading, setLoading] = useState(false);

  const debounced = useDebouncedCallback(async (v) => {
    if (v)
      if (v.length < 3) return;
      else
        getPlacePredictions({
          input: v,
          componentRestrictions: { country: "in" },
        });

    // const res: Location[] = await getAutocompleteSuggestions(value);
    // setSearchedLocations(res);
  }, 1000);

  const [inputValue, setInputValue] = useState("");
  const [value, setValue] =
    useState<google.maps.places.AutocompletePrediction>();

  useEffect(() => {
    if (location?.source === "auto") {
      toast.success(`Location auto-detected: ${location.displayName}`);
      setInputValue(location.displayName);
    }
    setLoading(false);
  }, [location]);

  const { placePredictions, getPlacePredictions } = usePlacesService({
    // apiKey: "", //"AIzaSyA6myHzS10YXdcazAFalmXvDkrYCp5cLc8",
  });

  // useEffect(() => {
  //   setSearchedLocations(
  //     placePredictions.map(
  //       (placePrediction: google.maps.places.AutocompletePrediction) => {
  //         return {
  //           displayName: placePrediction.description,
  //           lat: 0,
  //           lng: 0,
  //           source: "manual",
  //         };
  //       }
  //     )
  //   );

  //   return () => setSearchedLocations([]);
  // }, [placePredictions]);

  // Debounce typing → API call
  // const debouncedFetch = useMemo(
  //   () =>
  //     debounce((val) => {
  //       getPlacePredictions({ input: val });
  //     }, 300),
  //   [getPlacePredictions]
  // );

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   debouncedFetch(e.target.value);
  // };

  const handleSelect = async (
    _e: React.SyntheticEvent,
    placeValue: google.maps.places.AutocompletePrediction | null
  ) => {
    setValue(placeValue ?? undefined);
    if (placeValue?.place_id) {
      const place = new google.maps.places.Place({ id: placeValue.place_id });
      try {
        const details = await place.fetchFields({
          fields: ["location", "displayName"],
        });
        if (details?.place.location) {
          const displayName = details.place.displayName || "";
          const lat = details.place.location?.lat() || 0;
          const lng = details.place.location?.lng() || 0;

          // console.log("Selected:", displayName);
          // console.log("Lat:", lat);
          // console.log("Lng:", lng);
          updateLocation({ lat, lng, displayName, source: "manual" });
        } else {
          console.warn("Place has no location field available.");
        }
      } catch (err) {
        console.error("Error fetching place details:", err);
      }
    }
  };

  //   <FeaturedBusinesses />
  // const defaultCityList = [
  //   ...(location?.displayName ? [location.displayName] : []), // Include current city if not already in the list
  //   ...(searchedLocations.map((c) => c.displayName) || []).filter(
  //     (city) => city?.toLowerCase() !== location?.displayName?.toLowerCase()
  //   ), // Exclude current city
  // ];

  // const getLocationDetails = (name: string): Location | undefined =>
  //   searchedLocations.find(
  //     (loc) => loc?.displayName?.toLowerCase() === name.toLowerCase()
  //   );

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
          // options={defaultCityList}
          options={placePredictions ?? []}
          getOptionLabel={(option) => option.description || ""}
          value={value}
          inputValue={inputValue}
          onChange={handleSelect}
          onInputChange={(_e, newValue, reason) => {
            console.log("onInputChange");
            setInputValue(newValue);
            if (reason === "input") debounced(newValue);
          }}
          // value={location?.displayName || ""}
          // onChange={(_e, newCity) => {
          //   const newLocation = getLocationDetails(newCity);
          //   if (newLocation) updateLocation(newLocation);
          //   else detectLocation();
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose your area"
              // value={inputValue}
              // onChange={handleChange}
              // onChange={(e) => debounced(e.target.value)}
            />
          )}
          // disableClearable
          clearOnBlur={false}
          selectOnFocus
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
