import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonContainerprops {
    enabled: boolean;
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerprops>`
    width: 100%;
    height: ${RFPercentage(8)}px;
    background-color: ${({ theme, enabled }) =>
        enabled ? theme.colors.secondary : theme.colors.secondary_light};
    margin: ${({ theme }) => RFValue(theme.common.padding / 4)}px 0;
    padding: ${({ theme }) => RFValue(theme.common.padding / 2)}px
        ${({ theme }) => RFValue(theme.common.padding)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.bold};
    color: ${({ theme }) => theme.colors.shape};
`;
