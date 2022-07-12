import React from "react";
import { DataTransactionProps } from "./Interface";
import { Container, Title, TransactionList } from "./styles";
import Transaction from "./Transaction";

export default function Dashboard() {
    const data: DataTransactionProps[] = [
        {
            id: "1",
            title: "Desenvolvimento",
            amount: 5000,
            category: { name: "Alimentação", icon: "power" },
            date: "23/32/2322",
            type: "income",
        },
        {
            id: "2",
            title: "Desenvolvimento",
            amount: 5000,
            category: { name: "Alimentação", icon: "power" },
            date: "23/32/2322",
            type: "outcome",
        },
        {
            id: "3",
            title: "Desenvolvimento",
            amount: 5000,
            category: { name: "Alimentação", icon: "power" },
            date: "23/32/2322",
            type: "income",
        },
    ];

    return (
        <Container>
            <Title>Listagem</Title>

            <TransactionList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction data={item} />}
            />
        </Container>
    );
}
