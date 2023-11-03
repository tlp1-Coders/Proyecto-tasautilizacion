import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../context/AuthContext";

const pages = [{name:"Inicio", path:"/"}, { name: "Consultas", path: "/consultas" }];
const settings = [
  { name: "Mis Vehiculos", path: "/misVehiculos" },
  { name: "Cambiar Contraseña", path: "#" },
];

export const TestNavBar = () => {
  const { logout, token, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <RouterLink className="navbar-brand" to="/">
              <img
                src="../../public/muni2.jpeg"
                alt=""
                className="logo-nav me-2"
              />
              Fermosa
            </RouterLink>
          </Typography>

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
              {pages.map((page,index) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <RouterLink className="dropdown-item" to={page.path}>
                      {page.name}
                    </RouterLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <RouterLink className="navbar-brand" to="/">
              <img
                src="../../public/muni2.jpeg"
                alt=""
                className="logo-nav me-2"
              />
              Fermosa
            </RouterLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <RouterLink className="dropdown-item" to={page.path}>
                  {page.name}
                </RouterLink>
              </Button>
            ))}
          </Box>
          {token ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                {user}
                <AccountCircle />
             
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
                {settings.map((setting,index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <RouterLink   className="dropdown-item"  to={setting.path}>
                        {setting.name}
                      </RouterLink>
                    </Typography>
                  </MenuItem>
                ))} 
                <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                <Button variant="text" onClick={handleLogOut}>Cerrar Sesión</Button>
                </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
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
            <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">
              <RouterLink className="dropdown-item" to="/ingresar">
                Ingresar
              </RouterLink>
              <RouterLink className="dropdown-item" to="/registro">
                Registro
              </RouterLink>
            </Typography>
            </MenuItem>
          </Menu>

          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
