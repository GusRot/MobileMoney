import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";
import { DataTransactionProps } from "./Interface";

export const Container = styled.View`
`;

export const Title = styled.Text`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    padding: ${({ theme }) => RFValue(theme.common.padding - 5)}px 0;
`;

export const TransactionList = styled(
    FlatList as new (
        props: FlatListProps<DataTransactionProps>
    ) => FlatList<DataTransactionProps>
).attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-bottom: ${({ theme }) => RFValue(theme.common.padding * 3)}px;
`;
