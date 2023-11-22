import React, { useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Divider,
  IconButton 
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

export const CommentsPages = () => {
  const { authState, isLoading } = useAuthContext();
  const [comments, setComments] = React.useState([]);
  const socket = useMemo(
    () =>
      io(import.meta.env.VITE_BACK_URL, {
        transports: ["websocket", "polling"],
        auth: {
          token: authState.token,
        },
        autoConnect: false,
      }),
    [authState.token]
  );

  useEffect(() => {
    socket.connect();
    socket.emit("allComments");
    socket.on("allComments", (comments) => {
      console.log(comments);
      setComments(comments);
    });

    return () => {
      socket.off("allComments");
      console.log("desconectado");
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    socket.on("comment", (comment) => {
      console.log(comment);
      setComments((prevComments) => [...prevComments, comment]);
    });

    return () => {
      socket.off("comment");
    };
  }, [socket]);

  const { register, handleSubmit, reset } = useForm();

  const handleAddComment = (data) => {
    const { comment } = data;
    if (comment.trim() !== "") {
      socket.emit("createComment", comment);
      reset();
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
          }}
        >
          <Box
            sx={{
              p:1,
              backgroundColor: "white",
              opacity: 0.9,
              borderRadius: "10px",
              boxShadow: 15,
              textAlign: "center", 
            }}
          >
              <Typography variant="h5">Comentarios</Typography>
              <Divider />
            <Box mt={2}
            sx={
              {
                height:"50vh",
                width:"80vh",
                overflow:"scroll",
                "&::-webkit-scrollbar": {
                  width: "0.4em",
                },
              }
            }
            >
              {comments.map((comment) => (
                <Box
                  key={comment.id}
                  sx={{
                    display: "flex",
                    flexDirection: comment.idUser === authState.user.id ? "row-reverse" : "row",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: comment.idUser === authState.user.id ? "#4CAF50" : "#333",
                      color: "white",
                      borderRadius: "10px",
                      p: 1,
                      ml: comment.idUser === authState.user.id ? 0 : 2,
                      mr: comment.idUser === authState.user.id ? 2 : 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {`${comment.user.nombreApellido}:`}
                    </Typography>
                    <Typography>{comment.comentario}</Typography>
                  </Box>
                  {comment.idUser === authState.user.id && (
                    <Box>
                      <IconButton>
                        <Edit />
                      </IconButton>
                      <IconButton>
                        <Delete />
                      </IconButton>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <Box mt={2}>
              <Container
                component="form"
                onSubmit={handleSubmit(handleAddComment)}
              >
                <TextField
                  label="Agregar comentario"
                  {...register("comment")}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  mt={3}
                  fullWidth
                >
                  Agregar
                </Button>
              </Container>
            </Box>
          </Box>
        </Box>
    </>
  );
};
