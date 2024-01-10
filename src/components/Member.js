import React from "react";
import { Avatar, Box, ListItemIcon } from "@mui/material";
import FlameIcon from "../assets/Icons/flame_white.svg";

const Member = ({ name, eventType, peopleCardImage }) => {
  return (
    <Box
      style={{
        height: "80px",
        marginLeft: "60px",
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-start",
        marginBottom: "20px",
        borderRadius: "20px",
        width: "300px",
      }}
    >
      <ListItemIcon>
        <img
          src={peopleCardImage}
          alt="Event Icon"
          style={{ paddingLeft: "20px" }}
        />
      </ListItemIcon>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <h3
              style={{
                marginTop: "3px",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "normal",
                fontFamily: "Poppins",
                marginLeft: "15px",
              }}
            >
              {name}
              <h4
                style={{
                  marginTop: "15px",
                  fontSize: "12px",
                  marginBottom: "0px",
                  color: "#87858E",
                }}
              >
                {eventType}
              </h4>
            </h3>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Member;
