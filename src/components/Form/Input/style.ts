import { TextInput } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface InputContainerProps {
    focus: boolean;
    filled: boolean;
}

export const InputContainer = styled(TextInput)<InputContainerProps>`
    width: 100%;
    height: ${RFPercentage(8)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text_dark};
    margin: ${({ theme }) => RFValue(theme.common.padding / 4)}px 0;
    padding: ${({ theme }) => RFValue(theme.common.padding / 2)}px
        ${({ theme }) => RFValue(theme.common.padding)}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.secondary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    border: 1px solid transparent;

    ${({ filled }) =>
        filled &&
        css`
            border-color: ${({ theme }) => theme.colors.success_light};
        `};

    ${({ focus }) =>
        focus &&
        css`
            border-color: ${({ theme }) => theme.colors.primary};
        `};
`;
