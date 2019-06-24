import { takeLatest, call, put, select } from "redux-saga/effects";
import * as types from "../redux/constants/chat";
import * as actions from "../redux/actions/chat";
import ChatAPI from '../services/ChatAPI';

const selectTheOtherUser = state => state.chat.userId;

function* fetchChat(action) {
    const { userId } = action;
    try {
        const { messages } = yield call(ChatAPI.fetchChat, { userId });
        yield put(actions.fetchChatSuccess(messages));
    } catch (err) {
        console.log(err);
        yield put(actions.fetchChatFailure());
    }
}

function* sendMessage(action) {
    const { message } = action;
    const userId = yield select(selectTheOtherUser);

    try {
        const { message } = yield call(ChatAPI.sendMessage, { userId, message});
        yield put(actions.sendMessageSuccess(message));
    } catch (err) {
        console.log(err);
        yield put(actions.sendMessageFailure());
    }
}

export default [
    takeLatest(types.FETCH_CHAT, fetchChat),
    takeLatest(types.SEND_MESSAGE, sendMessage)
]