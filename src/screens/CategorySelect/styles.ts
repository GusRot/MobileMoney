import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { CategoriesProps } from "../../components/utils/categories";
import { RFValue } from "react-native-responsive-fontsize";
import { padding } from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const CategorySelectContainer = styled.View`
    justify-content: space-between;
    flex: 1;
`;

export const CategoriesList = styled(
    FlatList as new (
        props: FlatListProps<CategoriesProps>
    ) => FlatList<CategoriesProps>
).attrs({
    showsVerticalScrollIndicator: false,
})`
    padding: ${({ theme }) => RFValue(theme.common.padding - 5)}px 0;
`;

export const Separator = styled.View`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
`;

export const ButtonContainer = styled.View`
    ${padding}
`;
