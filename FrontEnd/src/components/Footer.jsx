import React from 'react';
import { Typography, Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ padding: 1, textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="body2" color="textSecondary" component="p" sx={{ margin: 0 }}>
        Municipalidad de la Ciudad de Formosa - Provincia de Formosa - República Argentina
      </Typography>
    </Box>
  );
}
