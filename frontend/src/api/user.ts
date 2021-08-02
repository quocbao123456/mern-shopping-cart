import axios from "axios";
import { LoginFormType, LoginUserType } from "types/login";

export const signIn = async (params: LoginFormType): Promise<LoginUserType> => {
    const response = await axios.post("/api/user/signin", params);
    return response.data;
};
