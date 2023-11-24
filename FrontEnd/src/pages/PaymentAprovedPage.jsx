import React, { useEffect } from 'react';
import { paymentPutRequest } from '../api/PaymentRequests';
import { Container, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PaymentAprovedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const upDatePayment = async () => {
      const mpOrder = window.localStorage.getItem('mpOrder');
      console.log(mpOrder);
      const pago = await paymentPutRequest(mpOrder);
      if (pago) {
        setTimeout(() => {
          window.localStorage.removeItem('mpOrder');
          navigate('/misVehiculos');
        }, 1500);
      }
    };

    upDatePayment();
  }, []); 

  return (
    <Container
      component='main'
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '70%',
        }}
      >
        <Typography variant='h1'>PAGO EXITOSO</Typography>
      </Paper>
    </Container>
  );
};
