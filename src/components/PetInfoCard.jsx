import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div className="">
      <Card sx={{ maxWidth: 345, m: 5 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://miro.medium.com/max/1400/0*PAJhVY4tMh34-y5q"
          title="green iguana"
        />
        <CardContent className="bg-[#84a98c]">
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className="bg-[#84a98c]">
          <Button size="small" sx={{ color: "black" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
