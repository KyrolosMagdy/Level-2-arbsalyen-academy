import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import { Routes } from "../constants/routes";
import Arbsalyen from "../assets/arbsalyen.jpeg";
import { StyledNavAvatarWrapper } from "./StyledNavbar";

const drawerWidth = 240;

export const NavBarComponent = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{ display: "grid", justifyContent: "center", margin: "1rem" }}
      >
        <Avatar
          src={Arbsalyen}
          style={{ width: "4rem", height: "4rem" }}
          alt="arbsalyen academy"
        />
      </div>

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate(Routes.home);
            }}
          >
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate(Routes.Courses);
            }}
          >
            <ListItemText primary={"Courses"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate(Routes.about);
            }}
          >
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={(theme) => ({
            backgroundColor: theme.palette.common.darkSelver,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <StyledNavAvatarWrapper>
              <Avatar
                src={Arbsalyen}
                style={{ width: "4rem", height: "4rem" }}
                alt="arbsalyen academy"
              />
            </StyledNavAvatarWrapper>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate(Routes.home);
                }}
              >
                Home
              </Button>
              <Button
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate(Routes.Courses);
                }}
              >
                Courses
              </Button>
              <Button
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate(Routes.about);
                }}
              >
                About
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Container>
  );
};
