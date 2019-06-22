import * as types from '../actions/auth';

export const signUp = () => ({
    type: types.SIGN_UP,
});

export const signUpSuccess = (user) => ({
    type: types.SIGN_UP_SUCCESS,
    payload: user,
});

export const signUpFailure = () => ({
    type: types.SIGN_UP_FAILURE
});

export const signIn = () => ({
    type: types.SIGN_IN,
});

export const signInSuccess = (user) => ({
    type: types.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = () => ({
    type: types.SIGN_IN_FAILURE
});