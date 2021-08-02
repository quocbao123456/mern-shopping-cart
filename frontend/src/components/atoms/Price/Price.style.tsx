import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { TypographyProps } from "../Typography/Typography";
import { textColors } from "components/style";

interface StyledPriceProps extends TypographyProps {
    available?: boolean;
    isDiscountPrice?: boolean;
}

const StyledPrice = styled(Typography)<StyledPriceProps>`
    font-weight: ${(props) => (props.isDiscountPrice ? "bold" : "normal")};

    text-decoration-line: ${(props) =>
        !props.available ? "line-through" : "normal"};
    color: ${(props) =>
        props.isDiscountPrice
            ? textColors.orange
            : !props.available
            ? textColors.grey
            : textColors.black};
`;

export default StyledPrice;
