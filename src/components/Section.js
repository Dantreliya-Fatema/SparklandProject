import React from "react";
import { Avatar, Box, ListItemIcon, Button } from "@mui/material";
import MoveIcon from "../assets/Icons/Move.svg";

const Section = ({ name, eventType, smallCardImage }) => {
  return (
    <Box
      style={{
        height: "80px",
        backgroundColor: "var(--Off-white, #F9F8FC)",
        marginLeft: "60px",
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        border: "1px solid var(--Off-white-2, #F5F5F7)",
        borderRadius: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <ListItemIcon>
          <img
            src={smallCardImage}
            alt="Event Icon"
            style={{ paddingLeft: "20px" }}
          />
        </ListItemIcon>
        <div>
          <div>
            <h4
              style={{
                marginLeft: "15px",
                marginTop: "15px",
                marginBottom: "0px",
              }}
            >
              {eventType}
            </h4>
            <div style={{ display: "flex", alignItems: "start" }}>
              <h3
                style={{
                  marginTop: "3px",
                  fontSize: "12px",
                  color: "var(--Sparkland-Orange, #FFAD54)",
                  fontWeight: "400",
                  lineHeight: "normal",
                  fontFamily: "Poppins",
                  marginLeft: "15px",
                }}
              >
                <span style={{ color: "black" }}>By</span> {name}{" "}
                <span style={{ color: "#87858E" }}> | 21 days Ago</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          size="small"
          sx={{ marginLeft: "5px", marginRight: "5px" }}
          style={{ color: "#87858E" }}
        >
          Edit
        </Button>
        <Button size="small" style={{ color: "#87858E" }}>
          Delete
        </Button>
        <span style={{ height: "30px", marginLeft: "10px", color: "#D6D5D9" }}>
          |
        </span>
        <Avatar
          sx={{
            width: 25,
            height: 25,
            marginRight: 5,
            marginLeft: "10px",
            marginTop: "-5px",
          }}
          src={MoveIcon}
        />
      </div>
    </Box>
  );
};

export default Section;
