import { backgroundColors } from "components/style";
import React from "react";
import StyledPrimaryButton from "./PrimaryButton.style";

export interface PrimaryButtonProps {
    text?: string;
    onClick: () => void;
    textColor?: string;
    children?: React.ReactNode;
    border?: string;
    height?: string;
    width?: string;
    padding?: string;
    backgroundColor?: string;
    radius?: string;
    className?: string;
}

const PrimaryButton: React.VoidFunctionComponent<PrimaryButtonProps> = (
    props: PrimaryButtonProps
) => {
    const { text, children } = props;
    return (
        <StyledPrimaryButton {...props}>
            {text}
            {children}
        </StyledPrimaryButton>
    );
};

PrimaryButton.defaultProps = {
    text: "",
    border: "0px",
    height: "35px",
    textColor: "white",
    padding: "0 20px",
    backgroundColor: backgroundColors.orange,
    radius: "3px",
};

export default PrimaryButton;
