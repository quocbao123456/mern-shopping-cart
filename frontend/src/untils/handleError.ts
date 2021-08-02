import { AxiosError } from "axios";
import { toast } from "react-toastify";

const handleError = (error: AxiosError): void => {
    if (error.response?.status !== 500) {
        toast.error(error.response?.data.message);
        return;
    }
    toast.error("Server Internal Errors");
};
export default handleError;
