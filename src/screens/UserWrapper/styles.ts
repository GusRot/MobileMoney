import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";
import { alignRow, padding } from "../../global/styles/theme";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: flex-start;
    height: ${RFPercentage(35)}px;
    z-index: 2;
    margin-bottom: ${RFPercentage(2.5)}px;
`;

export const Header = styled.View`
    ${padding}
    width: 100%;
    margin-top: ${({ theme }) => RFValue(theme.common.padding * 2)}px;
    justify-content: space-between;
    ${alignRow}
`;

export const ProfileContainer = styled.View`
    flex-direction: row;
`;

export const Photo = styled.Image`
    width: ${({ theme }) => RFValue(theme.common.logo)}px;
    height: ${({ theme }) => RFValue(theme.common.logo)}px;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.gap)}px;
`;

export const WelcomeContainer = styled.View``;

export const UserWelcome = styled.Text`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const UserName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.family.bold};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => RFValue(theme.fonts.icon)}px;
`;
