import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HomeCardContainer = styled.ScrollView.attrs({
    horizontal: true,
    showHorizontalScrollIndicator: false,
})`
    position: absolute;
    margin-top: ${({ theme }) =>
        RFValue(theme.common.padding * 5 + theme.common.logo)}px;
    margin-left: ${({ theme }) => RFValue(theme.common.padding)}px;
`;
