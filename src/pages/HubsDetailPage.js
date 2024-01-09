// src/pages/HubsDetailPage.js

import React from "react";
import SmallCard from "../components/SmallCard";
import BirthdayImg from "../assets/Icons/IMG (4).png";
import SmallImg from "../assets/Icons/Rectangle 14.png";
import FlameIcon from "../assets/Icons/flame_white.svg";
import DesertImg from "../assets/Icons/IMG (5).png";
import BoatImg from "../assets/Icons/IMG (6).png";
import FlowerImg from "../assets/Icons/flower.png";
import PortImg from "../assets/Icons/port.png";
import Waterimg from "../assets/Icons/water.png";
import Profile1 from "../assets/Icons/Rectangle 14 (2).png";
import Profile2 from "../assets/Icons/Rectangle 14 (1).png";
import Profile3 from "../assets/Icons/Rectangle 14 (3).png";
import Profile4 from "../assets/Icons/Rectangle 14 (4).png";

const HubsDetailPage = () => {
  // Sample data for six cards
  const cardData = [
    {
      name: "Emily Noel",
      eventType: "Birthday Party",
      icon: FlameIcon,
      smallCardImage: BirthdayImg,
      profile: SmallImg,
    },
    {
      name: "John Doe",
      eventType: "Camels of the Desert",
      icon: FlameIcon,
      smallCardImage: DesertImg,
      profile: Profile1,
    },
    {
      name: "Alice",
      eventType: "Kayak adventure a...",
      icon: FlameIcon,
      smallCardImage: BoatImg,
      profile: Profile2,
    },
    {
      name: "Caren Warehouse",
      eventType: "First look at the new...",
      icon: FlameIcon,
      smallCardImage: FlowerImg,
      profile: Profile3,
    },
    {
      name: "Ann Bailey",
      eventType: "Challange: how you...",
      icon: FlameIcon,
      smallCardImage: PortImg,
      profile: Profile4,
    },
    {
      name: "Alice",
      eventType: "Holiday 2020",
      icon: FlameIcon,
      smallCardImage: Waterimg,
      profile: Profile2,
    },
    {
      name: "Inez Lowe",
      eventType: "Camels of the Desert",
      icon: FlameIcon,
      smallCardImage: DesertImg,
      profile: SmallImg,
    },
    {
      name: "Emily Noel",
      eventType: "Kayak adventure a...",
      icon: FlameIcon,
      smallCardImage: BoatImg,
      profile: Profile1,
    },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <>
        <SmallCard
          key={index}
          name={card.name}
          eventType={card.eventType}
          icon={card.icon}
          smallCardImage={card.smallCardImage}
          profile={card.profile}
        />
      </>
    ));
  };

  return (
    <>
      <h2
        style={{ paddingLeft: "85px", marginTop: "50px", marginBottom: "40px" }}
      >
        SparkLand Product Feedback
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap", // Allow cards to wrap to the next row
          paddingLeft: "40px", // Space on the left
          paddingRight: "40px", // Space on the right
        }}
      >
        {renderCards()}
      </div>
    </>
  );
};

export default HubsDetailPage;
