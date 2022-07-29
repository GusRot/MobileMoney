import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
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
    const [nameInput, setNameInput] = useState("");
    const [amountInput, setAmountInput] = useState("");

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

    function handleRegister() {
        if (!iconType) {
            Alert.alert("Seleciona o tipo de transação");
            return;
        }

        if (!itemActive) {
            Alert.alert("Selecione uma categoria");
            return;
        }

        console.log({
            iconType,
            itemActive,
            nameInput,
            amountInput,
        });
    }
    return (
        <>
            <Header title="Forms" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Forms>
                        <FieldsContainer>
                            <Input
                                placeholder="Nome"
                                autoCapitalize="sentences"
                                autoCorrect={false}
                                onChangeText={setNameInput}
                            />
                            <Input
                                placeholder="Preço"
                                keyboardType="numeric"
                                onChangeText={setAmountInput}
                            />
                            <TypeButtonContainer>
                                <TransactionTypeButton
                                    title="Income"
                                    type="up"
                                    iconType={iconType}
                                    onPress={() => handleTypeButton("up")}
                                />
                                <TransactionTypeButton
                                    title="Outcome"
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
                        <Button title="Enviar" onPress={handleRegister} />
                    </Forms>
                </Container>
            </TouchableWithoutFeedback>

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
