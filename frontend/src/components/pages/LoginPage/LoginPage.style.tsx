import styled from "styled-components";

const StyledForm = styled.form`
    width: 400px;
    background: white;
    margin: 100px auto 0 auto;
    padding: 20px;
    p {
        margin-bottom: 10px;
        :last-of-type {
            margin-bottom: 20px;
        }
    }
    .form__links {
        margin-top: 15px;
        text-align: center;
    }
`;

export default StyledForm;
