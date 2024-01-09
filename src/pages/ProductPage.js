import React from "react";
import Product from "../components/Product";
import ElephantCardImages from "../assets/Icons/IMG (3).png";
import Balloon from "../assets/Icons/IMG.png";
import ManCardImage from "../assets/Icons/IMG (2).png";
import SunsetCardImage from "../assets/Icons/sunset.png";
import PlusIcon from "../assets/Icons/Plus_oval.svg";
import { Avatar } from "@mui/material";

const ProductPage = () => {
  const productData = [
    {
      description: "Title of the Spark when user hovers over the card",
      imageUrl: Balloon,
    },
    {
      description: "Title of the Spark when user hovers over the card",
      imageUrl: ManCardImage,
    },
    {
      description: "Title of the Spark when user hovers over the card",
      imageUrl: SunsetCardImage,
    },
    {
      description: "Title of the Spark when user hovers over the card",
      imageUrl: ElephantCardImages,
    },
  ];

  const renderProducts = () => {
    return productData.map((product, index) => (
      <Product
        key={index}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    ));
  };

  return (
    <>
      <div>
        <h1
          style={{
            paddingLeft: "85px",
            marginTop: "50px",
            marginBottom: "-15px",
          }}
        >
          SparkLand Product <br /> Feedback
        </h1>
        <p style={{ paddingLeft: "85px", color: "#87858E" }}>
          Hi community! Leave us any comment or suggestion for this beta product
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ paddingLeft: "85px", marginTop: "50px" }}>
          Section 1 Title
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={PlusIcon}
            alt="Plus Icon"
            style={{ marginRight: "10px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "10px",
          flexWrap: "wrap",
          padding: "0 20px",
          marginLeft: "60px",
        }}
      >
        {renderProducts()}
      </div>
    </>
  );
};

export default ProductPage;
