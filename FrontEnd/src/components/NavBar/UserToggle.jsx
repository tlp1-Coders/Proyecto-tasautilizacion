import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link as RouterLink, useNavigate,  } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

export const UserToggle = ({Pages }) => {
  const navigate= useNavigate();
 const { user, token, logout }= useAuthContext();
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
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
          {token?user:'Ingresar'}
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
        {Pages.map((setting, index) => (
          <MenuItem key={index} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">
              <RouterLink className="dropdown-item" to={setting.path}>
                {setting.name}
              </RouterLink>
            </Typography>
          </MenuItem>
        ))}
        {token && (
            <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">
              <Button variant="text" onClick={handleLogOut}>
                Cerrar Sesión
              </Button>
            </Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
