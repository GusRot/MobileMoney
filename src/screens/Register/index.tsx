import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Button from "../../components/Form/Button";
import CategorySelect from "../CategorySelect";
import CategorySelectButton from "../../components/Form/CategorySelectButton";
import Header from "../../components/Header";
import {
    Container,
    FieldsContainer,
    Forms,
    TypeButtonContainer,
} from "./style";
import TransactionTypeRegister from "./TransactionTypeRegister";
import TransactionInputRegister from "./TransactionInputRegister";

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
        if (validRegister()) {
            console.log({
                iconType,
                itemActive,
                nameInput,
                amountInput,
            });
        }
    }

    function validRegister() {
        if (!iconType) {
            Alert.alert("Seleciona o tipo de transação");
            return false;
        }

        if (!itemActive) {
            Alert.alert("Selecione uma categoria");
            return false;
        }

        return true;
    }
    return (
        <>
            <Header title="Forms" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Forms>
                        <FieldsContainer>
                            <TransactionInputRegister
                                amountInput={setAmountInput}
                                nameInput={setNameInput}
                            />
                            <TypeButtonContainer>
                                <TransactionTypeRegister
                                    handleTypeButton={handleTypeButton}
                                    iconType={iconType}
                                />
                            </TypeButtonContainer>
                            <CategorySelectButton
                                title={
                                    itemActive
                                        ? itemActive
                                        : "Escolha uma Categoria"
                                }
                                onPress={handleModalOpen}
                                active={itemActive ? true : false}
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
