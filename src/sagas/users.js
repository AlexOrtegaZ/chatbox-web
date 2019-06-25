import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../redux/constants/users";
import * as actions from "../redux/actions/users";
import ChatAPI from '../services/ChatAPI';

function* setCurrentUserOnline() {
    try {
      const response = yield call(ChatAPI.setCurrentUserOnline);
      yield put(actions.setCurrentUserOnlineSuccess(response));
    } catch (err) {
      console.log(err);
      yield put(actions.setCurrentUserOnlineFailure());
    }
}

function* fetchOnlineUsers() {
    try {
        const { users } = yield call(ChatAPI.fetchOnlineUsers);
        yield put(actions.fetchOnlineUsersSuccess(users));
    } catch (err) {
        console.log(err);
        yield put(actions.fetchOnlineUsersFailure());
    }   
}

function* fetchUsers() {
    try {
        const { users } = yield call(ChatAPI.fetchUsers);
        yield put(actions.fetchUsersSuccess(users));
    } catch (err) {
        console.log(err);
        yield put(actions.fetchUsersFailure());
    }   
}
export default [
    takeLatest(types.FETCH_ONLINE_USERS, fetchOnlineUsers),
    takeLatest(types.FETCH_USERS, fetchUsers),
    takeLatest(types.SET_USER_ONLINE, setCurrentUserOnline)
]