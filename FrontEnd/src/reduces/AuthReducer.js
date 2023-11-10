import { authTypes } from '../types/authTypes';

export const authReducer = (state, action) => {
    switch (action.type) {
        case authTypes.LOGIN_USER:
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case authTypes.LOGOUT_USER:
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null,
            };
        case authTypes.REGISTER_USER:
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return state;
    }
};
