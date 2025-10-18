import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import type React from "react";

interface MapSectionProps {
  latitude?: number;
  longitude?: number;
  markerText?: string;
}

const MapComponent: React.FC<MapSectionProps> = ({
  latitude,
  longitude,
  markerText,
}) => {
  if (latitude === undefined || longitude === undefined) {
    return <p>Location not available.</p>;
  }
  const position: LatLngTuple = [latitude, longitude];
  return (
    <Box>
      <Typography variant="h6">Location Map</Typography>
      <Box
        sx={{
          width: "100%",
          height: 300,
          backgroundColor: "#eee",
          borderRadius: 2,
        }}
      >
        <MapContainer center={position} zoom={15} style={{ height: "300px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // attribution="© OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>{markerText}</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default MapComponent;
