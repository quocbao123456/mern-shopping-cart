import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "Icon/ShoppingCart";
import Typography from "components/atoms/Typography";
import StyledNavbar from "./Navbar.style";
import Profile from "Icon/Profile";
import SearchBar from "components/molecule/SearchBar";
import axios from "axios";
import { useSelector } from "react-redux";
import { LoginUserType, ReduxState } from "modules/redux/reducer";

const Navbar: React.VoidFunctionComponent = () => {
    const handleSingUp = async (): Promise<any> => {
        const params = {
            username: "user",
            email: "email",
            password: "123456",
        };
        const res = await axios.post("/api/user/signup", params);
        return res.data;
    };
    const loginUser: LoginUserType | null = useSelector(
        (state: ReduxState) => state.loginUser
    );

    return (
        <StyledNavbar>
            <div className="navbar__logo">
                <Link to="/">
                    <h2>Shopping</h2>
                </Link>
            </div>
            <div className="navbar__action">
                <div>
                    <SearchBar
                        value={"1"}
                        onChange={() => {
                            console.log("Navbars");
                        }}
                    />
                </div>
                <ul className="navbar__links">
                    <li>
                        <Link to="cart">
                            <div>
                                <ShoppingCart />
                            </div>
                            <Typography fontSize="sm">Giỏ hàng</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="cart">
                            <div>
                                <ShoppingCart />
                            </div>
                            <Typography fontSize="sm">Giỏ hàng</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="cart">
                            <div>
                                <ShoppingCart />
                            </div>
                            <Typography fontSize="sm">Giỏ hàng</Typography>
                        </Link>
                    </li>

                    <li>
                        {!loginUser ? (
                            <React.Fragment>
                                <Link to="login">
                                    <Typography fontSize="sm">
                                        Đăng nhập
                                    </Typography>
                                </Link>
                                {` / `}
                                <Link to="cart" onClick={handleSingUp}>
                                    <Typography fontSize="sm">
                                        Đăng ký
                                    </Typography>
                                </Link>
                            </React.Fragment>
                        ) : (
                            <Typography fontSize="sm">
                                Xin chào {loginUser.username} !
                            </Typography>
                        )}
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
