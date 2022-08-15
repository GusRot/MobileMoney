import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./style";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}

export default function Button({ title, active = false, ...all }: ButtonProps) {
    return (
        <ButtonContainer {...all}>
            <Title active={active}>{title}</Title>
        </ButtonContainer>
    );
}
