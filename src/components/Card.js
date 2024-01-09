import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MemberWhiteIcon from "../assets/Icons/members_white.svg";
import FlameIcon from "../assets/Icons/flame_white.svg";
import ShareIcon from "../assets/Icons/share_white.svg";
import { ListItemIcon } from "@mui/material";
import Balloon from "../assets/Icons/IMG.png";
import ProfileIcon from "../assets/Icons/IMG Profile.png";
import "../fonts/Poppins-Black.ttf";
import "../../src/App.css";

const CustomCard = ({ name, title, cardImage }) => {
  return (
    <Card
      sx={{
        width: "240px",
        height: 430,
        marginBottom: 2,
        borderRadius: "18px",
      }}
    >
      <CardMedia
        component="img"
        alt="Card Image"
        height="60%"
        image={cardImage}
      />
      <CardContent
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "start" }}>
          <Avatar
            sx={{ width: 30, height: 30, marginRight: 1 }}
            src={ProfileIcon}
          />
          <h4
            style={{
              marginTop: "3px",
              fontSize: "15px",
              color: "var(--Sparkland-Orange, #FFAD54)",
              fontWeight: "400",
              lineHeight: "normal",
              fontFamily: "Poppins",
            }}
          >
            {name}
          </h4>
        </div>
        <h4 style={{ marginTop: "1px", size: "14px", fontFamily: "Poppins" }}>
          {title}
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            paddingTop: "4px",
          }}
        >
          <ListItemIcon style={{ margin: "-2px -15px 0px -2px" }}>
            <img src={ShareIcon} alt="Share Icon" height="16" />
          </ListItemIcon>
          <ListItemIcon style={{ margin: "-2px -15px 0px -2px" }}>
            <img src={MemberWhiteIcon} alt="Member Icon" height="16" />
          </ListItemIcon>
          <ListItemIcon style={{ margin: "-2px -15px 0px -2px" }}>
            <img src={FlameIcon} alt="Flame Icon" height="16" />
          </ListItemIcon>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{
              marginTop: "-10px",
              display: "inline-flex",
              padding: "5px 16px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "18px",
              color: "white",
              background: "#FF6327 ",
              border: "none",
              fontSize: "12px",
            }}
          >
            Explore
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
