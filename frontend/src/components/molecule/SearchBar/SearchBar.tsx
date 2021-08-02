import React from "react";

import Typography from "components/atoms/Typography";
import StyledSearchBar from "./SearchBar.style";
import TextField from "components/atoms/TextField";
import PrimaryButton from "components/atoms/Button";

type SearchBarProps = {
    value: string;
    onChange: () => void;
};

const SearchBar: React.VoidFunctionComponent<SearchBarProps> = (
    props: SearchBarProps
) => {
    return (
        <StyledSearchBar>
            {/* <input
                type="text"
                id="navbar__search"
                placeholder="Tìm kiếm sản phẩm....."
                aria-label="Tìm kiếm sản phẩm"
            /> */}
            <TextField
                label={"Tên đăng nhập"}
                value={""}
                onChange={() => console.log("change input search")}
                name="navbar__search"
                id="navbar__search"
                hiddenLabel
                placeholder="Tìm kiếm sản phẩm....."
                aria-label="Tìm kiếm sản phẩm"
            />
            <PrimaryButton
                onClick={() => console.log("submit search")}
                text="Tìm kiếm"
                padding="0 8px"
            />
        </StyledSearchBar>
    );
};

export default SearchBar;
