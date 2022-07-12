import styled, { css } from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { alignRow, padding } from "../../../global/styles/theme";

interface Typeprops {
    type: "up" | "down" | "total";
}

export const Container = styled.View<Typeprops>`
    ${padding}
    width: ${RFPercentage(40)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: ${({ theme }) => RFValue(theme.common.radius_secondary)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.gap)}px;

    ${({ type, theme }) =>
        type === "total"
            ? `background-color: ${theme.colors.secondary};`
            : `background-color: ${theme.colors.shape};`};
`;

export const CardHeader = styled.View`
    ${alignRow};
    justify-content: space-between;
`;

export const CardTitle = styled.Text<Typeprops>`
    text-transform: uppercase;
    ${({ type, theme }) =>
        type === "total"
            ? `color: ${theme.colors.shape};`
            : `color: ${theme.colors.text_dark};`};
`;

export const CardIcon = styled(Feather)<Typeprops>`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) => RFValue(theme.fonts.dashboard)}px;
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

    ${({ type }) =>
        type === "total" &&
        css`
            color: ${({ theme }) => theme.colors.shape};
        `};
`;

export const CardValue = styled.Text<Typeprops>`
    font-size: ${({ theme }) => RFValue(theme.fonts.dashboard)}px;
    ${({ type, theme }) =>
        type === "total"
            ? `color: ${theme.colors.shape};`
            : `color: ${theme.colors.text_dark};`};
`;

export const CardDate = styled.Text<Typeprops>`
    font-size: ${({ theme }) => RFValue(theme.fonts.secondary - 2)}px;
    ${({ type, theme }) =>
        type === "total"
            ? `color: ${theme.colors.shape};`
            : `color: ${theme.colors.text};`};
`;
