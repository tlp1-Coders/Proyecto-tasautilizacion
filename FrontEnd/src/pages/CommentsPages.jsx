import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Divider,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const { EditIcon, DeleteIcon } = {
  EditIcon: Edit,
  DeleteIcon: Delete,
};

import io from "socket.io-client";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

export const CommentsPages = () => {
  const { register, handleSubmit, reset } = useForm();
  const { authState, isLoading } = useAuthContext();
  const [comments, setComments] = useState([]);
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
    socket?.connect();
    socket.emit("allComments");
    return () => {
      console.log("desconectado");
      socket.disconnect();
    }
  }, [socket])

  useEffect(() => {
    socket.on("allComments", (comments) => {
      console.log(comments);
      setComments(comments);
    });
    return () => {
      socket.off("allComments");
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

  useEffect(() => {
    socket.on("deleteComment", (deleteComment) => {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== deleteComment.id)
      );
    }
    );
    return () => {
      socket.off("deleteComment");
    }
  }, [socket]);

  const handleAddComment = (data) => {
    const { comment } = data;
    if (comment.trim() !== "") {
      socket.emit("createComment", comment);
      reset();
    }
  };

  const handleDeleteComment = (id) => {
    socket.emit("deleteComment", id);
    setComments ((prevComments) => prevComments.filter((comment) => comment.id !== id));
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
            p: 1,
            backgroundColor: "white",
            opacity: 0.9,
            borderRadius: "10px",
            boxShadow: 15,
            textAlign: "center",
          }}
        >
          <Typography variant="h5">Comentarios</Typography>
          <Divider />
          <Box
            mt={2}
            sx={{
              height: "50vh",
              width: "80vh",
              overflow: "scroll",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
          >
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Box
                  key={comment.id}
                  sx={{
                    display: "flex",
                    flexDirection:
                      comment.idUser === authState.user.id
                        ? "row-reverse"
                        : "row",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor:
                        comment.idUser === authState.user.id
                          ? "#4CAF50"
                          : "#333",
                      color: "white",
                      borderRadius: "10px",
                      p: 1,
                      ml:
                        comment.idUser === authState.user.id ? 0 : 2,
                      mr:
                        comment.idUser === authState.user.id ? 2 : 0,
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
                      <IconButton
                        id={comment.id}
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  )}
                </Box>
              ))
            ) : (
              <Typography>No hay comentarios</Typography>
            )}
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
