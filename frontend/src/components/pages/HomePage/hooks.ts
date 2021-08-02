import { getAllProduct } from "api/product";
import { useCallback, useEffect, useReducer } from "react";
import homeReducer, { defaultState } from "reducers/homeReducer";
import Action, {
    getProductsFail,
    getProductSuccess,
    getProductRequest,
} from "actions/homeActions";
import { HomeState } from "types/home";
import { useDispatch } from "react-redux";
import { setIsLoading } from "modules/redux/actions";

type UseHomePageReturnType = {
    state: HomeState;
    dispatch: React.Dispatch<Action>;
};

const useHomePage = (): UseHomePageReturnType => {
    const [state, dispatch] = useReducer(homeReducer, defaultState);
    const reduxDispatch = useDispatch();
    const fetchProducts = useCallback(async () => {
        dispatch(getProductRequest());
        reduxDispatch(setIsLoading(true));
        try {
            const response = await getAllProduct();
            dispatch(getProductSuccess(response));
            reduxDispatch(setIsLoading(false));
        } catch (error) {
            dispatch(getProductsFail(error));
            reduxDispatch(setIsLoading(false));
        }
    }, [reduxDispatch]);

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        state,
        dispatch,
    };
};

export default useHomePage;
