import React from "react";
// import "./Product.scss";
import { ProductType } from "types/home";
import StarRatingComponent from "react-star-rating-component";
import Price from "components/atoms/Price";
import StyledProduct from "./Product.style";
import calculatePrice from "untils/calculatePrice";
import Typography from "components/atoms/Typography";

type ProductProps = {
    product: ProductType;
};

const Product: React.VoidFunctionComponent<ProductProps> = (
    props: ProductProps
) => {
    const { price, discount, starRanking, imageUrl, name, countInStock } =
        props.product;
    return (
        <StyledProduct {...props}>
            {countInStock === 0 && (
                <div className="product--soldOut">Hết hàng</div>
            )}
            <div
                className={`product__body${
                    !countInStock ? " product__img--overlay" : ""
                }`}
            >
                <img src={imageUrl} alt={name} />
            </div>
            <div className="product__footer">
                <div className="product__name">
                    <Typography fontSize="re">{name}</Typography>
                </div>

                <div className="product__description">
                    <div>
                        <div>
                            <Price
                                price={calculatePrice(price, discount)}
                                isDiscountPrice={true}
                                fontSize="md"
                            />
                            <span className="product__discount">
                                -{discount}%
                            </span>
                        </div>
                        <div className="product__price">
                            <Price
                                price={price}
                                available={false}
                                fontSize="sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="product__ranking">
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={starRanking}
                    />
                </div>
            </div>
        </StyledProduct>
    );
};

export default Product;
