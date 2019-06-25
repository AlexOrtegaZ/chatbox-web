import {
    FETCH_ONLINE_USERS,
    FETCH_ONLINE_USERS_SUCCESS,
    FETCH_ONLINE_USERS_FAILURE,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_USER_ONLINE,
    SET_USER_ONLINE_SUCCESS,
    SET_USER_ONLINE_FAILURE
} from '../constants/users';

const initialState = {
    users: [],
    loading: false,
    connecting: false,
    isConnected: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ONLINE_USERS:
        case FETCH_USERS:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case FETCH_ONLINE_USERS_SUCCESS:
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case FETCH_ONLINE_USERS_FAILURE:
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case SET_USER_ONLINE:
            return {
                ...state,
                connecting: true,
                error: false,
            }
        case SET_USER_ONLINE_SUCCESS:
            return {
                ...state,
                isConnected: true,
                connecting: false,
            }
        case SET_USER_ONLINE_FAILURE:
            return {
                ...state,
                isConnected: false,
                connecting: false,
                error: true,
            }
        default:
            return state;
    }
}

export default reducer;