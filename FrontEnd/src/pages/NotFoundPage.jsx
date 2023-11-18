
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box textAlign={"center"} bgcolor={"white"} borderRadius={1} p={2}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Página no encontrada</Typography>
        <Typography variant="body1">La página que estás buscando no existe.</Typography>
        <Button component={Link} to="/" variant="outlined" color="primary">
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
};


