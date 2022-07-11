import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    height: ${RFPercentage(42)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ProfileContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${({ theme }) => RFValue(theme.common.logo)}px;
    height: ${({ theme }) => RFValue(theme.common.logo)}px;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.gap)}px;
`;

export const WelcomeContainer = styled.View``;

export const UserWelcome = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const UserName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) => RFValue(theme.fonts.icon)}px;
`;
