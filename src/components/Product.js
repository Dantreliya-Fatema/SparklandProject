import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Product = ({ description, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        marginBottom: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          "& .product-description": {
            display: "flex",
          },
        },
        "@media (max-width: 600px)": {
          maxWidth: 250,
        },
        "@media (max-width: 960px)": {
          maxWidth: 280,
        },
      }}
    >
      <div style={{ height: "192px", borderRadius: "20px" }}>
        <CardMedia
          component="img"
          alt="Product"
          height="200"
          image={imageUrl}
          style={{ marginBottom: "-33px" }}
        />
        <CardContent style={{ borderRadius: "20px" }}>
          <Typography
            variant="h6"
            component="div"
            className="product-description"
            sx={{
              display: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(5px)",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              zIndex: 1,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Product;
