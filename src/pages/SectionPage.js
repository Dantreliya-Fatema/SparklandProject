import React from "react";
import Section from "../components/Section";
import BirthdayImg from "../assets/Icons/IMG (4).png";
import DesertImg from "../assets/Icons/IMG (5).png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlusIcon from "../assets/Icons/Plus_oval.svg";
import { Avatar } from "@mui/material";

const SectionPage = () => {
  const sectionData = [
    {
      name: "Emily Noel",
      eventType: "Birthday Party",
      smallCardImage: BirthdayImg,
    },
    {
      name: "John Doe",
      eventType: "Camels of the Desert",
      smallCardImage: DesertImg,
    },
  ];

  const renderSections = () => {
    return sectionData.map((section, index) => (
      <Section
        key={index}
        name={section.name}
        eventType={section.eventType}
        smallCardImage={section.smallCardImage}
      />
    ));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ paddingLeft: "85px", marginTop: "50px" }}>
          Section 2 Title
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
          paddingLeft: "25px",
        }}
      >
        {renderSections()}
      </div>
    </>
  );
};

export default SectionPage;
