import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { alignRow, padding } from "../../../global/styles/theme";

interface AmountProps {
    color: "income" | "outcome";
}

export const Container = styled.View`
    ${padding}
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: ${({ theme }) => theme.common.radius}px;
    margin-bottom: ${({ theme }) => RFValue(theme.common.padding - 5)}px;
`;

export const Title = styled.Text`
    letter-spacing: 0.5px;
`;

export const Amount = styled.Text<AmountProps>`
    font-size: ${({ theme }) => RFValue(theme.fonts.amount)}px;
    padding: ${({ theme }) => RFValue(theme.common.padding - 5)}px 0
        ${({ theme }) => RFValue((theme.common.padding - 5) * 2)}px 0;
    color: ${({ theme, color }) =>
        color === "income" ? theme.colors.success : theme.colors.attention};
`;

export const InformationContainer = styled.View`
    ${alignRow}
    justify-content: space-between;
`;

export const TypeContainer = styled.View`
    ${alignRow}
`;

export const Date = styled.Text``;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => RFValue(theme.fonts.icon)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.padding - 5)}px;
`;

export const Type = styled.Text``;
