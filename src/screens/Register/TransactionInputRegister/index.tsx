import Input from "../../../components/Form/Input";

interface InputRegisterProps {
    nameInput: React.Dispatch<React.SetStateAction<string>>;
    amountInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function transactionInputRegister({
    nameInput,
    amountInput,
}: InputRegisterProps) {
    return (
        <>
            <Input
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                onChangeText={nameInput}
            />
            <Input
                placeholder="Preço"
                keyboardType="numeric"
                onChangeText={amountInput}
            />
        </>
    );
}
