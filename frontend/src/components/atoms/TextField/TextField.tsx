import React from "react";
import StyledTextField from "./TextField.style";

export type TextFieldProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id: string;
    placeholder?: string;
    label?: string;
    hiddenLabel?: boolean;
    verticalLabel?: boolean;
    type?: string;
    fullWidth?: boolean;
};

const TextField: React.VoidFunctionComponent<TextFieldProps> = ({
    label,
    hiddenLabel = false,
    onChange,
    verticalLabel,
    fullWidth,
    ...rest
}: TextFieldProps) => {
    return (
        <React.Fragment>
            <StyledTextField
                verticalLabel={verticalLabel}
                fullWidth={fullWidth}
            >
                {!hiddenLabel && <label htmlFor="">{label}</label>}
                <input {...rest} aria-label={label} onChange={onChange} />
            </StyledTextField>
        </React.Fragment>
    );
};

export default TextField;
