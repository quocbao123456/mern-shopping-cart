import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const StyledCustomToastContainer = styled(ToastContainer)`
    .Toastify__toast--error {
        background-color: #ff8080;
    }
    .Toastify__toast--success {
        background-color: #80ff80;
    }
    .Toastify__toast-body {
        font-size: 14px;
    }
    .Toastify__toast {
        border-radius: 2px;
    }
`;

export default StyledCustomToastContainer;
