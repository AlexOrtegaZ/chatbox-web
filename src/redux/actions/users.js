import * as types from '../constants/users';

// setCurrentUserOnline
export const setCurrentUserOnline = () => ({
    type: types.SET_USER_ONLINE,
})
export const setCurrentUserOnlineSuccess = () => ({
    type: types.SET_USER_ONLINE_SUCCESS,
})
export const setCurrentUserOnlineFailure = () => ({
    type: types.SET_USER_ONLINE_FAILURE,
});

// fetchOnlineUsers
export const fetchOnlineUsers = () => ({
    type: types.FETCH_ONLINE_USERS,
});
export const fetchOnlineUsersSuccess = (users) => ({
    type: types.FETCH_ONLINE_USERS,
    payload: users,
});
export const fetchOnlineUsersFailure = () => ({
    type: types.FETCH_ONLINE_USERS_FAILURE,
});

// fetchUsers
export const fetchUsers = () => ({
    type: types.FETCH_USERS,
});
export const fetchUsersSuccess = (users) => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: users,
});
export const fetchUsersFailure = () => ({
    type: types.FETCH_USERS,
});

