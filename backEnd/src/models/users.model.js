import { hash, matchCompare } from '../helpers/cryp.js';
import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreApellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER(10),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foto: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'users'
});




export const findOneUser = async (dni) => {
    try {
        const existingUser = await Users.findOne({
            where: {
                dni
            }
        })
        if (!existingUser) {
            return false;
        }
        return existingUser
    } catch (error) {
        console.log(error);
        return false;
    }
};
export const getUserLogin = async (user, password) => {
    try {
        const existingUser = await Users.findOne({
            where: {
                usuario: user,
            }
        })
        if (!existingUser) {
            return false;
        }
        const match = await matchCompare(password, existingUser.password);
        if (!match) {
            return false;
        }
        return existingUser
    } catch (error) {
        console.log(error);
        return false;
    }
};
export const createNewUser = async (user) => {
    try {
        const hashedPassword = await hash(user.password, 10);
        const newUser = await Users.create({
            ...user, password: hashedPassword
        })
        if (!newUser) {
            return false;
        }
        return newUser;
    } catch (error) {
        console.log(error);
        return false;
    }
};

