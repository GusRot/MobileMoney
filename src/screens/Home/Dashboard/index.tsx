import React from "react";
import { categoriesIcons } from "../../../components/utils/categories";
import { DataTransactionDashboard, DataTransactionSave } from "./Interface";
import { Container, Title, TransactionList } from "./styles";
import Transaction from "./Transaction";

interface DashboardProps {
    transactionsData: DataTransactionSave[];
}

export default function Dashboard({ transactionsData }: DashboardProps) {
    const transactionsFormatted: DataTransactionDashboard[] =
        transactionsData.map((item: DataTransactionSave) => {
            const amount = item.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
            const date = Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
            }).format(new Date(item.date));
            const icon = categoriesIcons[item.category];

            return {
                id: item.id,
                title: item.title,
                type: item.type,
                amount,
                category: {
                    name: item.category,
                    icon,
                },
                date,
            };
        });

    return (
        <Container>
            <Title>Listagem</Title>

            <TransactionList
                data={transactionsFormatted ? transactionsFormatted : []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction data={item} />}
            />
        </Container>
    );
}
