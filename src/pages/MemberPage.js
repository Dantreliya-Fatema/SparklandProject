// src/pages/MemberPage.js

import React from "react";
import Member from "../components/Member";
import People1 from "../assets/Icons/people1.png";
import People2 from "../assets/Icons/people2.png";
import People3 from "../assets/Icons/people3.png";
import People4 from "../assets/Icons/people4.png";
import People5 from "../assets/Icons/people5.png";

const MemberPage = () => {
  const memberData = [
    {
      name: "Hi, I’m Sara",
      eventType: "Freelance makeup artist",
      peopleCardImage: People1,
    },
    {
      name: "Hi,I’m Julius",
      eventType: "Let’s make some good business",
      peopleCardImage: People2,
    },
    {
      name: "Hi,I’m Stephanie",
      eventType: "I love my new hat!",
      peopleCardImage: People3,
    },
    {
      name: "Hi,I’m Michelle",
      eventType: "I’m a new sparker",
      peopleCardImage: People4,
    },
    // {
    //   name: "Hi,I’m Anthony",
    //   eventType: "Pizza enthusiast",
    //   peopleCardImage: People5,
    // },
  ];

  const renderMembers = () => {
    return memberData.map((member, index) => (
      <Member
        key={index}
        name={member.name}
        eventType={member.eventType}
        peopleCardImage={member.peopleCardImage}
      />
    ));
  };

  return (
    <>
      <div>
        <h1 style={{ paddingLeft: "85px", marginTop: "80px" }}>People</h1>
        <h3 style={{ paddingLeft: "85px", marginTop: "30px" }}>New members</h3>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          paddingLeft: "25px",
          marginBottom: "20px",
        }}
      >
        {renderMembers()}
      </div>
    </>
  );
};

export default MemberPage;
