import {Server} from 'socket.io';
import { getComment, getComments, createComment, deleteComment, updateComment } from '../models/comments.model.js';
import { socketHandShake } from '../middlewares/infoTokenSocket.js';

export const socketService = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });
    io.use(socketHandShake)

    io.on('connection', (socket) => {
        console.log('Usuario conectado');
        socket.on('disconnect', () => {
            console.log('Usuario desconectado');
        });
        //Traer todos los comentarios
        socket.on('allComments', async() => {
            try {
                const allComments = await getComments();
                if (!allComments) {
                    socket.emit('error', 'Comentarios no encontrados');
                    return;
                }
                socket.emit('allComments', allComments);
            } catch (error) {
                console.log(error);
                socket.emit('error', 'No se pudo obtener los comentarios, error de servidor');
            }
        });
        //Traer un comentario por id
        socket.on('getComment', async(id) => {
            try {
                const comment = await getComment(id, socket.user.id);
                if (!comment) {
                    socket.emit('error', 'Comentario no encontrado');
                    return;
                }
                socket.emit('comment', comment);
            } catch (error) {
                console.log(error);
                socket.emit('error', 'No se pudo obtener el comentario, error de servidor');
            }
        });

        //Crear un comentario
        socket.on('createComment', async(comment) => {
            try {
                const newComment = await createComment(socket.user.id, comment);
                if (!newComment) {
                    socket.emit('error', 'No se pudo crear el comentario');
                    return;
                }
                io.emit('comment', newComment);
            } catch (error) {
                console.log(error);
                socket.emit('error', 'No se pudo crear el comentario, error de servidor');
            }
        });   
   
    //Actualizar un comentario
    socket.on('updateComment', async(id, comment) => {
        try {
            const UpdateComment = await updateComment(id, socket.user.id, comment);
            if (!UpdateComment) {
                socket.emit('error', 'No se pudo actualizar el comentario');
                return;
            }
            socket.emit('comment', UpdateComment);
        } catch (error) {
            console.log(error);
            socket.emit('error', 'No se pudo actualizar el comentario, error de servidor');
        }
    });
    //Eliminar un comentario
    socket.on('deleteComment', async(id) => {
        try {
            const DeleteComment = await deleteComment(id, socket.user.id);
            if (!DeleteComment) {
                socket.emit('error', 'No se pudo eliminar el comentario');
                return;
            }
            socket.emit('comment', DeleteComment);
        } catch (error) {
            console.log(error);
            socket.emit('error', 'No se pudo eliminar el comentario, error de servidor');
        }
    });

}

    );
}