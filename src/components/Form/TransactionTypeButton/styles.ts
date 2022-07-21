import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { alignRow } from "../../../global/styles/theme";

interface Typeprops {
    type: "up" | "down";
}

interface Selectedprops {
    type: "up" | "down" | "";
    selected: boolean;
}

export const ButtonContainer = styled(TouchableOpacity)<Selectedprops>`
    width: 47%;
    height: ${RFPercentage(8)}px;
    background-color: ${({ theme }) => theme.colors.background};
    margin: ${({ theme }) => RFValue(theme.common.padding / 4)}px 0;
    padding: ${({ theme }) => RFValue(theme.common.padding / 2)}px
        ${({ theme }) => RFValue(theme.common.padding)}px;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    ${alignRow};

    ${({ type, selected }) =>
        type === "down" &&
        selected &&
        css`
            background-color: ${({ theme }) => theme.colors.attention_light};
            border-color: ${({ theme }) => theme.colors.attention_light};
        `};

    ${({ type, selected }) =>
        type === "up" &&
        selected &&
        css`
            background-color: ${({ theme }) => theme.colors.success_light};
            border-color: ${({ theme }) => theme.colors.success_light};
        `};
`;

export const ButtonIcon = styled(Feather)<Typeprops>`
    font-size: ${({ theme }) => RFValue(theme.fonts.icon)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.padding / 2)}px
        ${({ type }) =>
            type === "up" &&
            css`
                color: ${({ theme }) => theme.colors.success};
            `};

    ${({ type }) =>
        type === "down" &&
        css`
            color: ${({ theme }) => theme.colors.attention};
        `};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`;
