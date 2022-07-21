import react, { useState } from "react";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";
import {
    Container,
    FieldsContainer,
    Forms,
    TypeButtonContainer,
} from "./style";

export default function Register() {
    const [iconType, setIconType] = useState<"up" | "down" | "">("");

    function handleTypeButton(type: "up" | "down") {
        if (iconType === type) {
            setIconType("");
            return;
        }
        setIconType(type);
    }
    return (
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
                    <Input placeholder="Categoria" />
                </FieldsContainer>
                <Button title="Enviar" />
            </Forms>
        </Container>
    );
}
