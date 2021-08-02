import { FontSize, textColors } from "components/style";
import React from "react";
import formatterCurrency from "untils/formatCurrency";
import StyledPrice from "./Price.style";

export type PriceProps = {
    price: number;
    available?: boolean;
    isDiscountPrice?: boolean;
    fontSize?: FontSize;
};

const Price: React.VoidFunctionComponent<PriceProps> = (props: PriceProps) => {
    const { price, isDiscountPrice, available, fontSize } = props;
    return (
        <React.Fragment>
            <StyledPrice {...props}>
                <span>{formatterCurrency.format(price)}</span>
            </StyledPrice>
        </React.Fragment>
    );
};

// Set default props
Price.defaultProps = {
    isDiscountPrice: false,
    available: true,
    fontSize: "md",
};

export default Price;
