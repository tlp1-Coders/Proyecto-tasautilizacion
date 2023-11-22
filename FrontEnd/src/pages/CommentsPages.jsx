import React, { useEffect,useMemo } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import io from 'socket.io-client';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';

export const CommentsPages = () => {
 const {authState, isLoading} = useAuthContext();
  const [comments, setComments] = React.useState([]);
  const socket =useMemo(() => io(import.meta.env.VITE_BACK_URL,{
    transports: ['websocket', 'polling' ],
    auth: {
      token: authState.token,
    },
    autoConnect: false,
  }),[authState.token]); 


  useEffect(() => {
    socket.connect();
    socket.emit('allComments');
    socket.on('allComments', (comments) => {
      console.log(comments);
      setComments(comments);

    });

    return () => {
      socket.off('allComments');
      console.log('desconectado');
      socket.disconnect();
    };

  }, [socket]);

  useEffect(() => {
    socket.on('comment', (comment) => {
      console.log(comment);
      setComments((prevComments) => [...prevComments, comment]);
    });

    return () => {
      socket.off('comment');
    };
  }, [socket]);

 


  const { register, handleSubmit, reset } = useForm();

  const handleAddComment = (data) => {
    const { comment } = data;
    if (comment.trim() !== '') {
      socket.emit('createComment', comment);
      reset();
    }
  };

  return (
    isLoading ? < Loading /> :
    <Box 
      sx={{ 
        backgroundColor: "white",
        opacity: 0.9,
        borderRadius: "10px",
        boxShadow: 15,
        textAlign: "center",
      }}
    >
      <Typography variant="h5">Comentarios</Typography>
      <Box mt={2}>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            <Typography sx={{ color: comment.idUser === authState.user.id ? "Green" : "Black" }}>
              {`${comment.user.nombreApellido}: ${comment.comentario}`}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
      <Box mt={2}>
        <Container component="form" onSubmit={handleSubmit(handleAddComment)}>
          <TextField
            label="Agregar comentario"
            {...register('comment')}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" mt={2}>
            Agregar
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
