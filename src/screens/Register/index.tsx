import react, { useState } from "react";
import { Modal } from "react-native";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";
import CategorySelect from "../CategorySelect";
import CategorySelectButton from "../../components/Form/CategorySelectButton";
import Header from "../../components/Header";
import {
    Container,
    FieldsContainer,
    Forms,
    TypeButtonContainer,
} from "./style";

export default function Register() {
    const [iconType, setIconType] = useState<"up" | "down" | "">("");
    const [modal, setModal] = useState(false);
    const [itemActive, setItemActive] = useState("");

    function handleCategoryActive(category: string) {
        if (itemActive === category) {
            setItemActive("");
            return;
        }
        setItemActive(category);
    }

    function handleModalOpen() {
        setModal(!modal);
    }

    function handleTypeButton(type: "up" | "down") {
        if (iconType === type) {
            setIconType("");
            return;
        }
        setIconType(type);
    }
    return (
        <>
            <Header title="Forms" />
            <Container>
                <Forms>
                    <FieldsContainer>
                        <Input placeholder="Nome" />
                        <Input placeholder="Preço" />
                        <TypeButtonContainer>
                            <TransactionTypeButton
                                title="Income"
                                type="up"
                                iconType={iconType}
                                onPress={() => handleTypeButton("up")}
                            />
                            <TransactionTypeButton
                                title="teste"
                                type="down"
                                iconType={iconType}
                                onPress={() => handleTypeButton("down")}
                            />
                        </TypeButtonContainer>
                        <CategorySelectButton
                            title={
                                itemActive
                                    ? itemActive
                                    : "Escolha uma Categoria"
                            }
                            onPress={handleModalOpen}
                        />
                    </FieldsContainer>
                    <Button title="Enviar" />
                </Forms>
            </Container>

            <Modal visible={modal}>
                <CategorySelect
                    modal={handleModalOpen}
                    isActive={itemActive}
                    handleCategoryActive={handleCategoryActive}
                />
            </Modal>
        </>
    );
}
