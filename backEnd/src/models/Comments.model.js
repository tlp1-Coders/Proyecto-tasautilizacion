import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Users } from './users.model.js';

export const Comments = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true,
    tableName: 'comments'
});


export const getComment = async (id, idUser) => {
    try {
        const existingComment = await Comments.findOne({
            where: {
                id: id,
                idUser: idUser
            },
            include: [
                {
                    model: Users,
                    attributes: ['nombreApellido']
                }
            ]
        });
        if (!existingComment) {
            return false;
        }
        return existingComment;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getComments = async () => {
    try {
        const existingComments = await Comments.findAll(
            {
                include: [
                    {
                        model: Users,
                        attributes: ['nombreApellido']
                    }
                ]
            }
        );
        if (!existingComments) {
            return false;
        }
        return existingComments;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const updateComment = async (id, idUser, comentario) => {
    try {
        const existingComment = await getComment(id, idUser);
        if (!existingComment) {
            return false;
        }
        const updatedComment = await existingComment.update({
            comentario: comentario
        });
        return updatedComment;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const deleteComment = async (id, idUser) => {
    try {
        const existingComment = await getComment(id, idUser);
        if (!existingComment) {
            return false;
        }
        const deletedComment = await existingComment.destroy();
        return deletedComment;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const createComment = async (idUser, comment) => {
    try {
        const newComment = await Comments.create({
            idUser,
            comentario: comment,

        })
        if (!newComment) {
            return false;
        }
        const existingComment = await getComment(newComment.id, idUser);
            
        return existingComment;
    } catch (error) {
        console.log(error);
        return false;
    }
};
