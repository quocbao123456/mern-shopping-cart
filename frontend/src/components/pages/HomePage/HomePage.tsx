import React from "react";
import useHomePage from "./hooks";
import { ProductType } from "types/home";
import Product from "components/molecule/Product";
import Categories from "components/organism/Categories";
import StyledHomePage from "./HomePage.style";

const HomePage: React.FC = () => {
    const { state } = useHomePage();
    const { products } = state;
    return (
        <StyledHomePage>
            <div className="page__categories">
                <Categories />
            </div>
            <div className="products__container">
                {products.map((product: ProductType) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </StyledHomePage>
    );
};

export default HomePage;
