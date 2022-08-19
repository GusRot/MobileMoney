import React from "react";
import Button from "../../components/Form/Button";
import Header from "../../components/Header";
import { categories } from "../../components/utils/categories";
import CategorySelectInputButton from "./CategorySelectInputButton";
import {
    Container,
    CategoriesList,
    CategorySelectContainer,
    Separator,
    ButtonContainer,
} from "./styles";

interface CategorySelectProps {
    modal: () => void;
    isActive: string;
    handleCategoryActive: (item: string) => void;
}

export default function CategorySelect({
    modal,
    handleCategoryActive,
    isActive,
}: CategorySelectProps) {
    return (
        <>
            <Header title="Escolha a Categoria" />
            <Container>
                <CategorySelectContainer>
                    <CategoriesList
                        data={categories}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <CategorySelectInputButton
                                item={item}
                                isActive={isActive}
                                onPress={(e) => handleCategoryActive(item.name)}
                            />
                        )}
                        ItemSeparatorComponent={() => <Separator />}
                    />
                    <ButtonContainer>
                        <Button title={"Selecionar"} onPress={modal} />
                    </ButtonContainer>
                </CategorySelectContainer>
            </Container>
        </>
    );
}
