import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    enabled?: boolean;
}

export default function Button({ title, enabled = true, ...all }: ButtonProps) {
    return (
        <ButtonContainer enabled={enabled} {...all}>
            <Title>{title}</Title>
        </ButtonContainer>
    );
}
