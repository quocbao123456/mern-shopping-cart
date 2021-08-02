import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { signIn } from "api/user";
import { toast } from "react-toastify";
import handleError from "untils/handleError";
import LoginFormType from "types/login";
import { loginAction } from "modules/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReduxState } from "modules/redux/reducer";

const initialValues: LoginFormType = {
    email: "",
    password: "",
};

const useLoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const loginUser = useSelector((state: ReduxState) => state.loginUser);

    const onSubmitLogin = useCallback(async (values: LoginFormType) => {
        dispatch(loginAction(values));
    }, []);

    // useEffect(() => {
    //     if (loginUser) history.push("/");
    // }, [loginUser]);

    const formik = useFormik({
        initialValues,
        onSubmit: onSubmitLogin,
    });
    return {
        formik,
    };
};

export default useLoginPage;
