import React from "react";

export interface BaseButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    className?: string;
}

const BaseButton: React.VoidFunctionComponent<BaseButtonProps> = (
    props: BaseButtonProps
) => {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
    );
};
export default BaseButton;
