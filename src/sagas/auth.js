import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../redux/constants/auth";
import * as actions from "../redux/actions/auth";
import AuthAPI from "../services/AuthAPI";

function* signingUp(action) {
  const { user } = action;

  try {
    const response = yield call(AuthAPI.signUp, user);
    yield put(actions.signIn(user));
  } catch (err) {
    yield put(actions.signUpFailure());
  }
}

function* signingIn(action) {
  const { credentials } = action;
  try {
    const response = yield call(AuthAPI.signIn, credentials);
    const { token } = response;
    window.localStorage.setItem("token", token);

    yield put(actions.signInSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(actions.signInFailure());
  }
}

function* validateUser() {
  try {
    const { user } = yield call(AuthAPI.validateUser);
    if(user._id) {
      yield put(actions.signInSuccess(user));
    }
  } catch(err) {
    console.log(err);
  }
}

export default [
  takeLatest(types.SIGN_UP, signingUp),
  takeLatest(types.SIGN_IN, signingIn),
  takeLatest(types.VALIDATE_USER, validateUser)
];
