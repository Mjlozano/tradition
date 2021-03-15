import { UserActionTypes } from "./user.types";
//set current user state action
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});