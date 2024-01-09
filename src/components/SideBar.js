import React from "react";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useTheme from "@mui/system/useTheme";
import CompassIcon from "../assets/Icons/Compass.svg";
import CalendarIcon from "../assets/Icons/Calendar.svg";
import HubIcon from "../assets/Icons/hub_inactive.svg";
import MemberIcon from "../assets/Icons/Members.svg";
import LogoIcon from "../assets/Icons/logo.png";
import { Margin } from "@mui/icons-material";
import "../fonts/Poppins-Black.ttf";
import "../../src/App.css";

const drawerWidth = 260;

const SideBar = ({ window }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        flexDirection: "column",
        justifyContent: mobileOpen ? "center" : "start",
        alignItems: mobileOpen ? "center" : "start",
        height: "100%",
        background: "var(--Off-white, #F9F8FC)",
        display: mobileOpen ? "flex" : "block",
      }}
    >
      <h1
        style={{
          fontSize: "22px",
          color: "#000",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          marginBottom: "30px",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        <img
          src={LogoIcon}
          alt="Share Icon"
          height="16"
          style={{ marginRight: "10px" }}
        />
        Sparkland
        <p style={{ fontSize: "10px", marginLeft: "-20px", marginTop: "3px" }}>
          Enterprise
        </p>
      </h1>

      <List
        style={{
          color: "var(--Gray-4, #87858E)",
          fontFamily: "Poppins",
          fontSize: "8px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        <ListItem
          button
          sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins" }}
        >
          <ListItemIcon>
            <img
              src={CompassIcon}
              alt="Compass Icon"
              width="16"
              height="16"
              style={{ paddingLeft: "30px" }}
            />
          </ListItemIcon>
          <ListItemText primary="Discover" style={{ fontFamily: "Poppins" }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <img
              src={CalendarIcon}
              alt="Compass Icon"
              width="16"
              height="16"
              style={{ paddingLeft: "30px" }}
            />
          </ListItemIcon>
          <ListItemText primary="Today" />
        </ListItem>

        <ListItem
          button
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "200px",
            height: "37px",
            marginLeft: "30px",
          }}
        >
          <ListItemIcon>
            <img src={HubIcon} alt="Compass Icon" width="16" height="16" />
          </ListItemIcon>
          <ListItemText
            primary="Hubs"
            style={{
              marginLeft: "-30px",
              color: "black",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <img
              src={CalendarIcon}
              alt="Compass Icon"
              width="16"
              height="16"
              style={{ paddingLeft: "30px" }}
            />
          </ListItemIcon>
          <ListItemText primary="Sparks" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <img
              src={MemberIcon}
              alt="Compass Icon"
              width="16"
              height="16"
              style={{ paddingLeft: "30px" }}
            />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <nav aria-label="mailbox folders">
        <Hidden mdUp implementation="js">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="js">
          <Drawer
            variant="permanent"
            open
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default SideBar;
