import { getComment, getComments, createComment, deleteComment, updateComment } from '../models/comments.model.js';

export const getCommentbyid = async (server) =>async()=> {
   
};

export const getAllComments = async () => {
    try {
        const comments = await getComments();
        if (!comments) {
            socket.emit('error', 'Comentarios no encontrados');
            return;
        }
        socket.emit('comments', comments);
    } catch (error) {
        console.log(error);
        socket.emit('error', 'No se pudo obtener los comentarios, error de servidor');
    }
};

export const createCommentary = async (socket) => {
    try {
        const comment = await createComment(req.body, req.user.idUser);
        if (!comment) {
            socket.emit('error', 'No se pudo crear el comentario');
            return;
        }
        socket.emit('comment', comment);
    } catch (error) {
        console.log(error);
        socket.emit('error', 'No se pudo crear el comentario, error de servidor');
    }
};

export const commentUpdate = async (socket) => {
    try {
        const UpdateComment = await updateComment(req.params.id, req.user.idUser, req.body.comentario);
        if (!UpdateComment) {
            socket.emit('error', 'No se pudo actualizar el comentario');
            return;
        }
        socket.emit('comment', UpdateComment);
    } catch (error) {
        console.log(error);
        socket.emit('error', 'No se pudo actualizar el comentario, error de servidor');
    }
};

export const commentDelete = async (socket) => {
    try {
        const DeleteComment = await deleteComment(req.params.id, req.user.idUser);
        if (!DeleteComment) {
            socket.emit('error', 'No se pudo eliminar el comentario');
            return;
        }
        socket.emit('comment', DeleteComment);
    } catch (error) {
        console.log(error);
        socket.emit('error', 'No se pudo eliminar el comentario, error de servidor');
    }
};