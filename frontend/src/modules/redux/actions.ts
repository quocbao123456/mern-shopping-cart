import { signIn } from "api/user";
import { AxiosError } from "axios";
import LoginFormType from "types/login";
import { LoginUserType } from "./reducer";
import { Dispatch } from "react";
import handleError from "untils/handleError";
export const types = {
    SET_LOGIN_USER: "SET_LOGIN_USER",
    FETCH_USER_FAIL: "FETCH_USER_FAIL",
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
    FETCH_USER: "FETCH_USER",
    SET_IS_LOADING: "SET_IS_LOADING",
};

export type FetchUserSuccessAction = {
    type: typeof types.FETCH_USER_SUCCESS;
    payload: LoginUserType;
};

export const fetchUserSuccess = (
    payload: LoginUserType
): FetchUserSuccessAction => ({
    type: types.FETCH_USER_SUCCESS,
    payload,
});

export type FetchUserFailAction = {
    type: typeof types.FETCH_USER_FAIL;
};

export const fetchUserFail = (): FetchUserFailAction => ({
    type: types.FETCH_USER_FAIL,
});

export type FetchUserAction = {
    type: typeof types.FETCH_USER;
};

export const fetchUser = (): FetchUserAction => ({
    type: types.FETCH_USER,
});

export type SetIsLoadingAction = {
    type: typeof types.SET_IS_LOADING;
    payload: boolean;
};

export const setIsLoading = (payload: boolean): SetIsLoadingAction => ({
    type: types.SET_IS_LOADING,
    payload,
});

export const loginAction = (params: LoginFormType) => {
    return async (dispatch: Dispatch<any>): Promise<void> => {
        dispatch(fetchUser());
        try {
            const response = await signIn(params);
            dispatch(fetchUserSuccess(response));
        } catch (error) {
            handleError(error);
            dispatch(fetchUserFail());
        }
    };
};

type ActionType =
    | FetchUserSuccessAction
    | FetchUserSuccessAction
    | FetchUserAction
    | SetIsLoadingAction;
export default ActionType;
