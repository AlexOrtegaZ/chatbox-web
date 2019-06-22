import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from '../constants/auth';

const initialState = {
    user: null, 
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
        case SIGN_IN:
            return {
                ...state,
                loading: true
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: false
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: false,
                user: action.payload
            }
        case SIGN_UP_FAILURE:
        case SIGN_IN_FAILURE:
            return {
                ...state, 
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;