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
    return (
        <>
            <Input
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                onChangeText={nameInput}
                value={name}
            />
            <Input
                placeholder="Preço"
                keyboardType="numeric"
                onChangeText={amountInput}
                value={amount}
            />
        </>
    );
}
