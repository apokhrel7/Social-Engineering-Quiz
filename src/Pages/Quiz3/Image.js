import Card from "@mui/material/Card";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import google from "./google.png"
function Image() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 6,
        padding: "10px",
        boxShadow: "4px 4px lightblue",
      }}
    >
      <CardMedia
        component="img"
        height="500"
        image={google}
        alt="Image"
      />
    </Card>
  );
}
export default Image;
