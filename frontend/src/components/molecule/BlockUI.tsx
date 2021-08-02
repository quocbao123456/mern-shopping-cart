import React from "react";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

interface BlockUiProps {
    children: React.ReactNode;
    blocking: boolean;
}

const BlockUI: React.FC<BlockUiProps> = ({
    children,
    blocking,
}: BlockUiProps) => (
    <BlockUi
        tag="div"
        blocking={blocking}
        className="block-ui-custom-container"
    >
        {children}
    </BlockUi>
);

export default BlockUI;
