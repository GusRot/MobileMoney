import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface TitleProps {
    active: boolean;
}

export const ButtonContainer = styled(TouchableOpacity)`
    width: 100%;
    height: ${RFPercentage(8)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    margin: ${({ theme }) => RFValue(theme.common.padding / 4)}px 0;
    padding: ${({ theme }) => RFValue(theme.common.padding / 2)}px
        ${({ theme }) => RFValue(theme.common.padding)}px;
    justify-content: center;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
`;

export const Title = styled.Text<TitleProps>`
    color: ${({ theme, active }) =>
        active ? theme.colors.text_dark : theme.colors.text};
    font-size: ${({ theme, active }) =>
        active
            ? `${RFValue(theme.fonts.primary)}}px}`
            : `${RFValue(theme.fonts.secondary)}}px}`};
    font-family: ${({ theme, active }) =>
        active ? theme.fonts.family.bold : theme.fonts.family.regular};
`;
