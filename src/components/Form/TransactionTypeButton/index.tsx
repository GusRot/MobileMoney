import react from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title, ButtonIcon } from "./styles";

interface ButtonTypeProps extends TouchableOpacityProps {
    title: string;
    type: "up" | "down";
    iconType: "up" | "down" | "";
}

const Icons = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
};

export default function TransactionTypeButton({
    title,
    type,
    iconType,
    ...all
}: ButtonTypeProps) {
    return (
        <ButtonContainer {...all} type={iconType} selected={iconType === type}>
            <ButtonIcon name={Icons[type]} type={type} />
            <Title>{title}</Title>
        </ButtonContainer>
    );
}
