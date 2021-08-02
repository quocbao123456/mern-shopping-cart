import React from "react";
import { FontSize, textFontSize } from "components/style";
import StyledText from "./Typography.style";

export interface TypographyProps {
    fontSize?: FontSize;
    color?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Typography: React.VFC<TypographyProps> = (props: TypographyProps) => {
    const { children, ...rest } = props;
    return <StyledText {...rest}>{children}</StyledText>;
};

// Set default props
Typography.defaultProps = {
    fontSize: "md" as FontSize,
};

export default Typography;
