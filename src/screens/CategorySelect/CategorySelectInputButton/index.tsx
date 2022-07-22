import React from "react";
import { CategoriesContainer, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { CategoriesProps } from "../../../components/utils/categories";

interface ButtonCategoryProps extends TouchableOpacityProps {
    item: CategoriesProps;
    isActive: string;
}

export default function CategorySelectInputButton({
    item,
    isActive,
    ...all
}: ButtonCategoryProps) {
    return (
        <CategoriesContainer
            {...all}
            color={item.color}
            isActive={item.name === isActive}
        >
            <Icon
                name={item.icon}
                color={item.color}
                isActive={item.name === isActive}
            />
            <Title>{item.name}</Title>
        </CategoriesContainer>
    );
}
