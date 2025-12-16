import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Box, Typography } from "@mui/material";

import type { LatLngTuple } from "leaflet";
import type React from "react";

interface MapSectionProps {
  latitude?: number;
  longitude?: number;
  markerText?: string;
}
// Fix leaflet's default icon paths
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapComponent: React.FC<MapSectionProps> = ({
  latitude,
  longitude,
  markerText,
}) => {
  if (!latitude || !longitude) {
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
