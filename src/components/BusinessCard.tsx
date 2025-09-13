import { Card, CardContent, Typography } from "@mui/material";

interface IBusinessCard {
  name: string;
  category: string;
}
function BusinessCard({ name, category }: IBusinessCard) {
  return (
    <Card sx={{ margin: 2 }} elevation={3}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">{category}</Typography>
      </CardContent>
    </Card>
  );
}

export default BusinessCard;
