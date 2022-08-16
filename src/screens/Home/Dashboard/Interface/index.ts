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

export interface DataTransactionProps extends TransactionProps {
    id: string;
}

export interface DataTransactionSaveProps
    extends Omit<DataTransactionProps, "category"> {
    category: string;
}

export interface TransactionsProps {
    data: DataTransactionProps;
}
