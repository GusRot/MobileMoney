import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { alignRow } from "../../global/styles/theme";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: ${({ theme }) => RFValue(theme.common.padding + 5)}px;
`;

export const Forms = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const FieldsContainer = styled.View``;

export const TypeButtonContainer = styled.View`
    ${alignRow}
    justify-content: space-between;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px 0;
`;
