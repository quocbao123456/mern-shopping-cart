import Action from "actions/homeActions";
import { HomeState, types } from "types/home";

export const defaultState: HomeState = {
    products: [],
    errors: [],
};

const homeReducer = (state: HomeState, action: Action): HomeState => {
    const tmpState: HomeState = { ...state };

    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...tmpState,
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...tmpState,
                products: action.payload,
            };
        case types.GET_PRODUCTS_FAIL:
            return {
                ...tmpState,
                products: [],
            };
        default:
            return tmpState;
    }
};

export default homeReducer;
