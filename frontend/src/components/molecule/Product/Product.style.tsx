import {
    backgroundColors,
    borderColors,
    productColors,
    textColors,
} from "components/style";
import styled from "styled-components";

const StyledProduct = styled.div`
    border: 1px solid transparent;
    :hover {
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;
        cursor: pointer;
    }
    margin: 0 15px 15px 15px;
    position: relative;
    .product--soldOut {
        background-color: ${productColors.soldOut};
        color: ${textColors.white};
        position: absolute;
        right: -5px;
        top: -5px;
        font-size: 12px;
        padding: 5px 10px;
        z-index: 1;
    }
    .product__discount {
        background: ${backgroundColors.red};
        color: ${textColors.white};
        padding: 2px 4px;
        border-radius: 3px;
        margin-left: 10px;
    }
    .product__name {
        padding: 5px 0;
        span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 15px;
            height: 30px;
        }
    }
    .product__body {
        img {
            height: auto;
            min-height: 150px;
            width: 100%;
        }
    }
    .product__img--overlay {
        opacity: 0.6;
    }
    .product__footer {
        font-size: 12px;
        padding: 0 8px;
    }
    .product__description {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
    }
`;

export default StyledProduct;
