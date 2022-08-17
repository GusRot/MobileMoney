import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const HomeCardContainer = styled.ScrollView.attrs({
    horizontal: true,
    showHorizontalScrollIndicator: false,
})`
    position: absolute;
    z-index: 3;
    margin-top: ${RFPercentage(20)}px;
    margin-left: ${({ theme }) => RFValue(theme.common.padding)}px;
`;
