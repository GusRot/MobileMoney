import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { alignRow } from "../../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

interface CategoryColorProps {
    color: string;
    isActive: boolean;
}

interface CategoryButtonProps extends TouchableOpacityProps {
    color: string;
    isActive: boolean;
}

export const CategoriesContainer = styled(
    TouchableOpacity
)<CategoryButtonProps>`
    ${alignRow}
    padding: ${({ theme }) => RFValue(theme.common.padding)}px ${({ theme }) =>
        RFValue(theme.common.padding)}px;
    background-color: ${({ isActive, color, theme }) =>
        isActive ? color : theme.colors.shape};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.secondary)}px;
    font-family: ${({ theme }) => theme.fonts.family.bold};
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)<CategoryColorProps>`
    font-size: ${({ theme }) => RFValue(theme.fonts.icon)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.padding - 5)}px;
    margin-top: ${RFValue(-4)}px;
    color: ${({ isActive, theme, color }) =>
        isActive ? theme.colors.text_dark : color};
`;
