import React from "react";
import CustomCard from "../components/Card";
import SparkCard from "../assets/Icons/Spark Card (1).png";
import Spark from "../assets/Icons/Spark Card.png";
import Balloon from "../assets/Icons/IMG.png";
import ManCardImage from "../assets/Icons/IMG (2).png";
import PassportCardImage from "../assets/Icons/Spark Card (3).png";

const CardPage = () => {
  const cardData = [
    { name: "John Doe", title: "Design Sprint", cardImage: SparkCard },
    { name: "Anty Shafto", title: "Colors of Autumn", cardImage: Spark },
    {
      name: "Alice",
      title: "How to be a spark hero in 3 steps",
      cardImage: Balloon,
    },
    {
      name: "Bob",
      title: "SparkLand Product Feedback",
      cardImage: ManCardImage,
    },
    { name: "John Doe", title: "Design Sprint", cardImage: PassportCardImage },
    // { name: "Anty Shafto", title: "Colors of Autumn", cardImage: CatCardImage },
    // {
    //   name: "Alice",
    //   title: "How to be a spark hero in 3 steps",
    //   cardImage: SeaCardImages,
    // },
    // {
    //   name: "Bob",
    //   title: "SparkLand Product Feedback",
    //   cardImage: ElephantCardImages,
    // },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <CustomCard
        key={index}
        name={card.name}
        title={card.title}
        cardImage={card.cardImage}
      />
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingLeft: "40px",
        paddingRight: "40px",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {renderCards()}
    </div>
  );
};

export default CardPage;
