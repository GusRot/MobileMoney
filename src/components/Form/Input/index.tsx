import React from "react";
import { InputContainer } from "./style";
import { TextInputProps } from "react-native";

interface InputStyleProps extends TextInputProps {
    focus?: boolean;
    filled?: boolean;
}

export default function Input({
    focus = false,
    filled = false,
    ...all
}: InputStyleProps) {
    return <InputContainer focus={focus} filled={filled} {...all} />;
}
