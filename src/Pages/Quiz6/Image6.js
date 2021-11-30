import Card from "@mui/material/Card";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import acourtScam from "./scam6.png"
function Image6() {
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
        image={acourtScam}
        alt="Image"
      />
    </Card>
  );
}
export default Image6;
