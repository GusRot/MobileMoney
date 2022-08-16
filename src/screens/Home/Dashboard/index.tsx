import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
    categories,
    categoriesIcons,
} from "../../../components/utils/categories";
import { DataTransactionProps, DataTransactionSaveProps } from "./Interface";
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

    const [transactionsData, setTransactionsData] = useState<
        DataTransactionProps[]
    >([]);

    useEffect(() => {
        loadTransaction();
    }, []);

    async function loadTransaction() {
        try {
            const dataKey = "@mobilemoney:transactions";
            const response = await AsyncStorage.getItem(dataKey);
            const transactions = response ? JSON.parse(response) : [];

            const transactionsFormatted: DataTransactionProps[] =
                transactions.map((item: DataTransactionSaveProps) => {
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
            setTransactionsData([...transactionsFormatted]);
        } catch (error) {
            console.log(error);
            Alert.alert("não foi possível carregar os dados, tente novamente");
        }
    }

    return (
        <Container>
            <Title>Listagem</Title>

            <TransactionList
                data={transactionsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction data={item} />}
            />
        </Container>
    );
}
