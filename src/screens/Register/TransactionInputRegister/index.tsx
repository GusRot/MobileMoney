import { useState } from "react";
import Input from "../../../components/Form/Input";

interface InputRegisterProps {
    nameInput: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    amountInput: React.Dispatch<React.SetStateAction<string>>;
    amount: string;
}

export default function transactionInputRegister({
    nameInput,
    name,
    amount,
    amountInput,
}: InputRegisterProps) {
    const [onfocusAmount, setOnFocusAmount] = useState(false);
    const [onfocusName, setOnFocusName] = useState(false);
    const [filledAmount, setFilledAmount] = useState(false);
    const [filledName, setFilledName] = useState(false);

    function handleIsfocused(value: string) {
        if (value === "name") {
            setOnFocusName(true);
        }
        if (value === "amount") {
            setOnFocusAmount(true);
        }
    }

    function handleOnBlur(name: string, value: string) {
        setOnFocusName(false);
        setOnFocusAmount(false);
        if (name === "name") {
            setFilledName(!!value);
        }
        if (name === "amount") {
            setFilledAmount(!!value);
        }
    }

    return (
        <>
            <Input
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                onChangeText={nameInput}
                value={name}
                onBlur={() => handleOnBlur("name", name)}
                onFocus={() => handleIsfocused("name")}
                focus={onfocusName}
                filled={filledName}
            />
            <Input
                placeholder="Valor"
                keyboardType="numeric"
                onChangeText={amountInput}
                value={amount}
                onBlur={() => handleOnBlur("amount", amount)}
                onFocus={() => handleIsfocused("amount")}
                focus={onfocusAmount}
                filled={filledAmount}
            />
        </>
    );
}
