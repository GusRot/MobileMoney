import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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

export const Title = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.secondary)}px;
    font-family: ${({ theme }) => theme.fonts.family.bold};
    color: ${({ theme }) => theme.colors.text};
`;
