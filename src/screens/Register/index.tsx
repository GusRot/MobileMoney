import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Button from "../../components/Form/Button";
import CategorySelect from "../CategorySelect";
import uuid from "react-native-uuid";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataTransactionSaveProps } from "../Home/Dashboard/Interface";

export default function Register() {
    const [iconType, setIconType] = useState<"up" | "down" | "">("");
    const [modal, setModal] = useState(false);
    const [categoryActive, setCategoryActive] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [amountInput, setAmountInput] = useState("");

    function handleCategoryActive(category: string) {
        if (categoryActive === category) {
            setCategoryActive("");
            return;
        }
        setCategoryActive(category);
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

    async function handleRegister() {
        const amount = parseFloat(
            amountInput.replace(",", ".").replace(/[^0-9.]/g, "")
        );
        if (validRegister(amount)) {
            const type = iconType === "up" ? "income" : "outcome";
            const data: DataTransactionSaveProps = {
                id: String(uuid.v4()),
                type,
                category: categoryActive,
                title: nameInput,
                amount,
                date: String(new Date()),
            };

            try {
                const dataKey = "@mobilemoney:transactions";
                const response = await AsyncStorage.getItem(dataKey);
                const transactions = response ? JSON.parse(response) : [];
                await AsyncStorage.setItem(
                    dataKey,
                    JSON.stringify([data, ...transactions])
                );

                resetValues();
                Alert.alert(
                    `Registrado ${
                        iconType === "up" ? "entrada" : "saída"
                    } de R$ ${String(amount).replace(
                        ".",
                        ","
                    )} em ${categoryActive} (${nameInput}) `
                );
            } catch (error) {
                Alert.alert(
                    "não foi possível salvar os dados, tente novamente"
                );
            }
        }
    }

    function validRegister(amount: number) {
        if (!iconType) {
            Alert.alert("Selecione o tipo de transação");
            return false;
        }

        if (!nameInput || nameInput.length < 2) {
            Alert.alert("Deve ter no mínimo 2 caracteres");
            return false;
        }

        if (!amount) {
            Alert.alert("Digite um valor válido");
            return false;
        }

        if (!categoryActive) {
            Alert.alert("Selecione uma categoria");
            return false;
        }

        if (categoryActive === "Salário") {
            Alert.alert("Salário nao pode ser uma transação de saída");
            return false;
        }

        return true;
    }

    function resetValues() {
        setAmountInput("");
        setNameInput("");
        setCategoryActive("");
        setIconType("");
    }
    return (
        <>
            <Header title="Cadastre sua transação" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Forms>
                        <FieldsContainer>
                            <TransactionInputRegister
                                amountInput={setAmountInput}
                                amount={amountInput}
                                name={nameInput}
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
                                    categoryActive
                                        ? categoryActive
                                        : "Escolha uma Categoria"
                                }
                                onPress={handleModalOpen}
                                active={categoryActive ? true : false}
                            />
                        </FieldsContainer>
                        <Button title="Enviar" onPress={handleRegister} />
                    </Forms>
                </Container>
            </TouchableWithoutFeedback>

            <Modal visible={modal}>
                <CategorySelect
                    modal={handleModalOpen}
                    isActive={categoryActive}
                    handleCategoryActive={handleCategoryActive}
                />
            </Modal>
        </>
    );
}
