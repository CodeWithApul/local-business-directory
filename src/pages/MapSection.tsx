import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

// interface MapSectionProps {
//   latitude: number;
//   longitude: number;
// }

const MapComponent = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
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
        <MapContainer
          center={position}
          zoom={15}
          // style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // attribution="© OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>You're here!</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default MapComponent;
