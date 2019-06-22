import * as types from '../constants/auth';

export const signUp = (user) => ({
    type: types.SIGN_UP,
    user,
});

export const signUpSuccess = (user) => ({
    type: types.SIGN_UP_SUCCESS,
    payload: user,
});

export const signUpFailure = () => ({
    type: types.SIGN_UP_FAILURE
});

export const signIn = (credentials) => ({
    type: types.SIGN_IN,
    credentials,
});

export const signInSuccess = (user) => ({
    type: types.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = () => ({
    type: types.SIGN_IN_FAILURE
});

export const validateUser = () => ({
    type: types.VALIDATE_USER
});
