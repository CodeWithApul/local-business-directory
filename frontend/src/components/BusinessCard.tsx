import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IBusinessCard {
  name: string;
  category: string;
  id: string;
  logo: string;
}

function BusinessCard({ name, category, id, logo }: IBusinessCard) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/business/${id}`);
  };

  return (
    <Card
      sx={{
        margin: 2,
        cursor: "pointer",
        transition: "transform 0.3s, background-color 0.3s",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        backgroundColor: hovered ? "#f5f5f5" : "#fff",
      }}
      elevation={hovered ? 6 : 3}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        height="140"
        image={logo}
        alt={`${name} logo`}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">{category}</Typography>
      </CardContent>
    </Card>
  );
}

export default BusinessCard;
