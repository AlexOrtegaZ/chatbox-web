import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../redux/constants/auth';
import * as actions from '../redux/actions/auth';
import AuthAPI from '../services/AuthAPI';

function* signingUp(action) {
    console.log(action);
    try {
        const response = yield call(AuthAPI.signUp, user);
        yield put(actions.signIn(user));

    } catch(err) {
        yield put(actions.signUpFailure())
    }
}


function* signingIn(credentials) {
    try {
        const response = yield call(AuthAPI.signIn, credentials);
        console.log(response);
        
        const { token } = response;
        window.localStorage.setItem('token', token);
        
        yield put(actions.signInSuccess(response));

    } catch(err) {
        yield put(actions.signInFailure())
    }
}


export default [
    takeLatest(types.SIGN_UP, signingUp),
    takeLatest(types.SIGN_IN, signingIn),
];