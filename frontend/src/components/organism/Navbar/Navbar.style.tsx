import { backgroundColors, borderColors, textColors } from "components/style";
import styled from "styled-components";

const StyledNavbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid ${borderColors.grey};
    background: ${backgroundColors.white};
    .navbar__logo {
        h2 {
            color: ${textColors.orange};
        }
    }
    .navbar__action {
        display: flex;
        align-items: center;
    }
    .navbar__links {
        list-style: none;
        display: flex;
        li {
            text-align: center;
            :not(:last-child) {
                margin-right: 20px;
            }
        }
    }
`;

export default StyledNavbar;
