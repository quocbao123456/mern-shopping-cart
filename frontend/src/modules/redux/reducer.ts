import ActionType, {
    FetchUserSuccessAction,
    SetIsLoadingAction,
    types,
} from "./actions";

export interface LoginUserType {
    username: string;
    email: string;
}

export type ReduxState = {
    isLoading: boolean;
    loginUser: LoginUserType | null;
};
const initState: ReduxState = {
    isLoading: false,
    loginUser: null,
};

const reducer = (
    state: ReduxState = initState,
    action: ActionType
): ReduxState => {
    let tmpState = { ...state };
    switch (action.type) {
        case types.FETCH_USER:
            tmpState = {
                ...tmpState,
                isLoading: true,
            };
            break;
        case types.FETCH_USER_SUCCESS:
            tmpState = {
                ...tmpState,
                isLoading: false,
                loginUser: (action as FetchUserSuccessAction).payload,
            };
            break;
        case types.FETCH_USER_FAIL:
            tmpState = {
                ...tmpState,
                isLoading: false,
            };
            break;
        case types.SET_IS_LOADING:
            tmpState = {
                ...tmpState,
                isLoading: (action as SetIsLoadingAction).payload,
            };
            break;
        default:
            break;
    }
    return tmpState;
};

export default reducer;
