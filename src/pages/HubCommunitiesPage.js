import React from "react";
import HubCommunities from "../components/HubCommunities";
import Hub1 from "../assets/Icons/hub1.png";
import Hub2 from "../assets/Icons/hub2.png";
import Hub3 from "../assets/Icons/hub3.png";
import Hub4 from "../assets/Icons/hub4.png";
import Hub5 from "../assets/Icons/hub5.png";
import Hub6 from "../assets/Icons/hub6.png";
import Hub8 from "../assets/Icons/hub8.png";
import Hub9 from "../assets/Icons/hub9.png";
import Hub10 from "../assets/Icons/hub10.png";
import Hub11 from "../assets/Icons/hub11.png";
import Hub12 from "../assets/Icons/hub12.png";
import Hub13 from "../assets/Icons/hub13.png";

const HubCommunitiesPage = () => {
  const communityData = [
    {
      eventType: "Challenge: what young people want at work",
      hubImages: [Hub1, Hub2, Hub3, Hub4, Hub5, Hub6],
    },
    {
      eventType: "How to be a spark hero in 3 easy steps",
      hubImages: [Hub8, Hub9, Hub10, Hub11, Hub1, Hub13, Hub3],
    },
    {
      eventType: "SparkLand Product Feedback",
      hubImages: [Hub12, Hub13, Hub3, Hub2, Hub5, Hub4, Hub10, Hub8],
    },
    {
      eventType: "Transforming education",
      hubImages: [Hub1, Hub4, Hub8, Hub10, Hub5, Hub2, Hub11],
    },
  ];

  const renderCommunities = () => {
    return communityData.map((community, index) => (
      <HubCommunities
        key={index}
        name={community.name}
        eventType={community.eventType}
        hubImages={community.hubImages}
      />
    ));
  };

  return (
    <>
      <div>
        <h3 style={{ paddingLeft: "85px", marginTop: "50px" }}>
          Hub communities
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          paddingLeft: "25px",
          marginBottom: "20px",
          marginLeft: "50px",
          marginTop: "20px",
          height: "400px",
        }}
      >
        {renderCommunities()}
      </div>
    </>
  );
};

export default HubCommunitiesPage;
