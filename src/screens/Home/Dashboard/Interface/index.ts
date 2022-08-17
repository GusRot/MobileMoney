interface CategoryProps {
    name: string;
    icon: string;
}

interface TransactionProps {
    title: string;
    amount: number;
    date: string;
    category: CategoryProps;
    type: "income" | "outcome";
}

interface DataTransactionProps extends TransactionProps {
    id: string;
}

export interface DataTransactionDashboard
    extends Omit<DataTransactionProps, "amount"> {
    amount: string;
}

export interface DataTransactionSaveProps
    extends Omit<DataTransactionProps, "category"> {
    category: string;
}

export interface DataTransactionSave
    extends Omit<DataTransactionProps, "category"> {
    category:
        | "Compras"
        | "Alimentação"
        | "Salário"
        | "Carro"
        | "Lazer"
        | "Estudos";
}

export interface TransactionsProps {
    data: DataTransactionDashboard;
}
