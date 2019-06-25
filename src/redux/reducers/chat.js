import {
    FETCH_CHAT,
    FETCH_CHAT_SUCCESS,
    FETCH_CHAT_FAILURE,
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE
} from '../constants/chat';

const initialState = {
    messages: [],
    userId: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHAT:
            return {
                ...state,
                messages: [],
                userId: action.userId,
                loading: true,
            }
        case FETCH_CHAT_SUCCESS:
            return {
                ...state,
                messages: action.payload,
                loading: false,
                error: false,
            }
        case FETCH_CHAT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case SEND_MESSAGE:
            return {
                ...state,
                loading: true,
            }
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                loading: false,
                error: false,
            }
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}
export default reducer;