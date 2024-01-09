import React from "react";
import { Avatar, Box, CardMedia, ListItemIcon } from "@mui/material";

const SmallCard = ({ name, eventType, icon, smallCardImage, profile }) => {
  return (
    <>
      <Box
        style={{
          width: "280px",
          height: "80px",
          backgroundColor: "rgb(247 247 247)",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
          display: "flex",
          justifyContent: "space-start",
          paddingLeft: "20px",
        }}
      >
        <CardMedia
          component="img"
          alt="Card Image"
          style={{ width: "80px" }}
          image={smallCardImage}
        />
        <div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <Avatar
              sx={{ width: 30, height: 30, marginRight: 1, marginLeft: "10px" }}
              src={profile}
            />
            <h3
              style={{
                marginTop: "3px",
                fontSize: "12px",
                color: "var(--Sparkland-Orange, #FFAD54)",
                fontWeight: "400",
                lineHeight: "normal",
                fontFamily: "Poppins",
              }}
            >
              {name}
            </h3>
          </div>
          <div>
            <h4 style={{ marginLeft: "15px", marginTop: "0px" }}>
              {eventType}
            </h4>
            <div style={{ display: "flex" }}>
              <ListItemIcon>
                <img
                  src={icon}
                  alt="Icon"
                  height="16"
                  style={{ marginTop: "-15px", marginLeft: "10px" }}
                />
              </ListItemIcon>
              <p
                style={{
                  marginTop: "-11px",
                  fontSize: "8px",
                  marginLeft: "-22px",
                }}
              >
                365 | 21d ago
              </p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SmallCard;
