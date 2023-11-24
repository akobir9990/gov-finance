import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../assets/logo.png";
import esanbayevna from "../../assets/images/esanbayevna.jpg";
import Router from "../../router/router";
import { NavLink } from "react-router-dom";
import "../../router/const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
} from "../../router/const";

const pages = [
  { id: 1, name: "Текст лекций", path: TUTORIAL_PAGE },
  { id: 2, name: "Презентации", path: PRESENTATION_PAGE },
  { id: 3, name: "Практические задания", path: PRACTICE_PAGE },
  { id: 4, name: "Тесты", path: TEST_PAGE },
];
const settings = [
  { id: 1, name: "Об авторе", path: AUTHOR_PAGE },
  { id: 2, name: "О программе", path: ABOUT_PAGE },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const nameOfScinece = "ТФИ";

  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink
              className="flex items-center justify-center"
              to={HOME_PAGE}
            >
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                <img
                  className="w-[40px] mr-4 rounded-[50%]"
                  src={logo}
                  alt=""
                />
              </Box>
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {nameOfScinece}
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <NavLink sx={{}} to={page.path} key={page.id}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          color: "#00337C",
                          fontWeight: "semibold",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img className="w-[40px] rounded-[50%]" src={logo} alt="" />
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {nameOfScinece}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink to={page.path} key={page.id}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={esanbayevna} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <NavLink key={setting.id} to={setting.path}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        sx={{
                          color: "#00337C",
                          fontWeight: "semibold",
                        }}
                        textAlign="center"
                      >
                        {setting.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container className="p-20">
        <Router />
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;
