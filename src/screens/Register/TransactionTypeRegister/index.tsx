import TransactionTypeButton from "../../../components/Form/TransactionTypeButton";

type transactionTypeRegisterProps = "up" | "down";

interface TypeRegisterProps {
    iconType: "" | transactionTypeRegisterProps;
    handleTypeButton: (type: transactionTypeRegisterProps) => void;
}

export default function transactionTypeRegister({
    iconType,
    handleTypeButton,
}: TypeRegisterProps) {
    return (
        <>
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
        </>
    );
}
