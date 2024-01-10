/* eslint-disable jsx-a11y/img-redundant-alt */
// src/components/HubCommunities.js

import React from "react";
import { Avatar, Box, ListItemIcon } from "@mui/material";
import FlameIcon from "../assets/Icons/flame_white.svg";
import Button from "@mui/material/Button";
import ShareIcon from "../assets/Icons/share_white.svg";
import MemberWhiteIcon from "../assets/Icons/members_white.svg";
import OptionIcon from "../assets/Icons/options_gray.svg";

import "../../src/App.css";

const HubCommunities = ({ eventType, hubImages }) => {
  return (
    <Box
      style={{
        width: "230px",
        height: "350px",
        marginBottom: "2px",
        borderRadius: "18px",
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

        background: "linear-gradient(to top left, #e8cbc0 0%, #636fa4 100%)",
        marginTop: "20px",
      }}
    >
      {hubImages.map((hubImage, index) => (
        <img
          key={index}
          src={hubImage}
          alt={`Hub Image ${index + 1}`}
          height="15%"
          style={{
            borderRadius: "18px 18px 0 0",
            width: "15%",
            // backgroundColor: "#f5eaea",
            paddingLeft: "10px",
            marginTop: "20px",
          }}
        />
      ))}
      <h3
        style={{
          fontSize: "12px",
          marginTop: "80px",
          paddingLeft: "10px",
          paddingRight: "10px",
          color: "white",
        }}
      >
        {eventType}
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ListItemIcon style={{ marginLeft: "10px" }}>
            <img src={OptionIcon} alt="Flame Icon" height="30" />
          </ListItemIcon>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{
              marginTop: "5px",
              display: "inline-flex",
              padding: "5px 16px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "18px",
              color: "white",
              background: "#FF6327 ",
              border: "none",
              fontSize: "10px",
              marginRight: "10px",
            }}
          >
            Explore
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      ></div>
    </Box>
  );
};

export default HubCommunities;
