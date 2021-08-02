import { backgroundColors, mediaSizeScreen } from "components/style";
import styled from "styled-components";

const StyledHomePage = styled.div`
    display: flex;
    .page__categories {
        width: 20%;
    }

    .products__container {
        width: 80%;
        grid-template-columns: repeat(5, auto);
        display: grid;
        background: ${backgroundColors.white};
        margin: 10px;
        border-radius: 5px;
        padding: 20px;
        @media (max-width: ${mediaSizeScreen.tablet}) {
            grid-template-columns: repeat(3, auto);
        }

        @media (max-width: ${mediaSizeScreen.ipad}) {
            grid-template-columns: repeat(2, auto);
        }

        @media (max-width: ${mediaSizeScreen.mobile}) {
            grid-template-columns: 1fr;
        }
    }
`;

export default StyledHomePage;
