import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
    padding: ${({ theme }) => RFValue(theme.common.padding * 3)}px 0
        ${({ theme }) => RFValue(theme.common.padding * 2)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
`;
