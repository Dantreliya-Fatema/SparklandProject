// src/pages/HubsPage.js

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ProfileIcon from "../assets/Icons/IMG Profile.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import CardviewIcon from "../assets/Icons/Card_view.svg";
import BellIcon from "../assets/Icons/Bell.svg";
import ListViewIcon from "../assets/Icons/List_view.svg";
import PlusIcon from "../assets/Icons/Plus.svg";
import TagIcon from "../assets/Icons/Tag.svg";
import FlagIcon from "../assets/Icons/Flag.svg";
import HubSaveIcon from "../assets/Icons/tag_hubsaved.svg";
import "../fonts/Poppins-Black.ttf";
import "../../src/App.css";

const HubsPage = () => {
  return (
    <Container className="main-container">
      <Box
        style={{
          // width: "92%",
          marginBottom: "40px",
          marginLeft: "80px",
          // border: "1px solid black",
          height: "300px",
          paddingLeft: "81px",
          paddingRight: "133px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar alt="Cindy Baker" src={ProfileIcon} />
            <div style={{ marginLeft: "10px" }}>
              <Typography variant="h6" component="h3">
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontFamily: "Poppins",
                  }}
                >
                  Hui Huang
                </span>{" "}
                |{" "}
                <span
                  style={{
                    color: "#FFAD54",
                    fontSize: "10px",
                    fontFamily: "Poppins",
                  }}
                >
                  Your Company Name
                </span>
              </Typography>
            </div>
          </div>

          <AppBar
            position="static"
            color="default"
            style={{
              width: "250px",
              height: "30px",
              borderRadius: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              fontFamily: "Poppins",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="search"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  padding: "0",
                  marginLeft: "50px",
                }}
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  padding: "0",
                  fontFamily: "Poppins",
                }}
              />
            </Toolbar>
          </AppBar>

          <div>
            <MenuItem style={{ fontSize: "10px" }}>
              <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <ListItemIcon style={{ margin: "-2px -15px 0px -2px" }}>
                    <img
                      src={BellIcon}
                      alt="Member Icon"
                      height="20"
                      width="20"
                    />
                  </ListItemIcon>
                </Badge>
              </IconButton>
            </MenuItem>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "100px",
          }}
        >
          <div>
            <div>
              <h1 style={{ fontFamily: "Poppins" }}>Hubs</h1>
            </div>

            <div>
              <Stack spacing={2} direction="row">
                <Button
                  variant="text"
                  style={{
                    borderRadius: "12px",
                    border: "1px solid var(--Off-white-2, #F5F5F7)",
                    background: "var(--Off-white, #F9F8FC)",
                    display: "flex",
                    padding: "8px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    color: "#000",
                    textAlign: "center",
                    height: "30px",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    width: "120px",
                  }}
                >
                  {" "}
                  <img src={TagIcon} alt="Tag Icon" height="16" />
                  Be Human
                </Button>
                <Button
                  style={{
                    borderRadius: "12px",
                    border: "1px solid var(--Off-white-2, #F5F5F7)",
                    background: "var(--Off-white, #F9F8FC)",
                    display: "flex",
                    padding: "8px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    color: "#000",
                    textAlign: "center",
                    height: "30px",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    width: "150px",
                    fontFamily: "Poppins",
                  }}
                >
                  <img src={FlagIcon} alt="Flag Icon" height="16" />
                  Brainstorming
                </Button>
                <Button
                  style={{
                    borderRadius: "12px",
                    border: "1px solid var(--Off-white-2, #AECE6B)",
                    background: "var(--Off-white, #F9F8FC)",
                    display: "flex",
                    padding: "8px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    color: "#000",
                    textAlign: "center",
                    height: "30px",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    width: "150px",
                  }}
                >
                  <img src={HubSaveIcon} alt="Tag Icon" height="16" />
                  SparkLand 50
                </Button>
              </Stack>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "35px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "12px",
                border: "1px solid var(--Sparkland-Orange, #FFAD54)",
                background: "var(--White, #FFF)",
                marginRight: "20px",
              }}
            >
              <ListItemIcon
                style={{
                  margin: "-2px -15px 0px -2px",
                  padding: "7px 8px 0px",
                }}
              >
                <img src={CardviewIcon} alt="Share Icon" height="20" />
              </ListItemIcon>
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "12px",
                background: "var(--White, #FFF)",
                marginRight: "20px",
              }}
            >
              <ListItemIcon
                style={{
                  margin: "-2px -15px 0px -2px",
                  padding: "7px 8px 0px",
                }}
              >
                <img src={ListViewIcon} alt="Share Icon" height="20" />
              </ListItemIcon>
            </div>
            <span
              style={{
                width: "0.64px",
                height: "40px",
                flexShrink: 0,
                color: "var(--Gray-2, #D6D5D9)",
                marginRight: "20px",
              }}
            >
              |
            </span>
            <div
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #FFB554 0%, #FF6327 100%)",
                boxShadow: "0px 10px 20px 0px rgba(255, 99, 39, 0.40)",
                marginRight: "20px",
              }}
            >
              <ListItemIcon
                style={{
                  margin: "-2px -15px 0px -2px",
                  padding: "7px 8px 0px",
                }}
              >
                <img src={PlusIcon} alt="Share Icon" height="20" />
              </ListItemIcon>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default HubsPage;
