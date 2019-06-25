import * as types from '../constants/chat';

// fetchChat
export const fetchChat = (userId) => ({
    type: types.FETCH_CHAT,
    userId,
});
export const fetchChatSuccess = (messages) => ({
    type: types.FETCH_CHAT_SUCCESS,
    payload: messages,
});
export const fetchChatFailure = () => ({
    type: types.FETCH_CHAT_FAILURE,
});

// sendMessage
export const sendMessage = (message) => ({
    type: types.SEND_MESSAGE,
    message,
});
export const sendMessageSuccess = (message) => ({
    type: types.SEND_MESSAGE_SUCCESS,
    message,
});
export const sendMessageFailure = () => ({
    type: types.SEND_MESSAGE_FAILURE,
});