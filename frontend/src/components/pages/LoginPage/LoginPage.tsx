import React from "react";
import useLoginPage from "./hooks";
import TextField from "components/atoms/TextField";
import PrimaryButton from "components/atoms/Button";
import StyledForm from "./LoginPage.style";
import Typography from "components/atoms/Typography";

const LoginPage: React.FC = () => {
    const { formik } = useLoginPage();

    return (
        <StyledForm>
            <TextField
                label={"Email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                name={"email"}
                id="email"
                fullWidth
            />
            <TextField
                label={"Mật khẩu"}
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                name={"password"}
                id="password"
                fullWidth
            />
            <PrimaryButton
                text={"Đăng nhập"}
                onClick={formik.handleSubmit}
                width="100%"
            />
            <div className="form__links">
                <Typography fontSize="sm" onClick={() => console.log("forgot")}>
                    Quên mật khẩu
                </Typography>
            </div>
        </StyledForm>
    );
};

export default LoginPage;
