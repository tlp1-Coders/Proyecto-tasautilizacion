import { authTypes } from '../types/authTypes';

export const authReducer = (authState, action) => {
    switch (action.type) {
        case authTypes.LOGIN_USER:
            return {
                ...authState,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case authTypes.LOGOUT_USER:
            return {
                ...authState,
                isAuth: false,
                user: null,
                token: null,
            };
        case authTypes.REGISTER_USER:
            return {
                ...authState,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return authState;
    }
};
