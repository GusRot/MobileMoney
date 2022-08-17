import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import HomeCardsContainer from "../../components/HomeCardsContainer";
import Dashboard from "./Dashboard";
import { MainWrapper } from "../../global/styles/theme";
import UserWrapper from "../UserWrapper";
import { Alert } from "react-native";
import { DataTransactionSave } from "./Dashboard/Interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const [transactionsData, setTransactionsData] = useState<
        DataTransactionSave[]
    >([]);

    useEffect(() => {
        loadTransaction();
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadTransaction();
        }, [])
    );

    async function loadTransaction() {
        try {
            const dataKey = "@mobilemoney:transactions";
            const response = await AsyncStorage.getItem(dataKey);
            const transactions = response ? JSON.parse(response) : [];

            setTransactionsData([...transactions]);
        } catch (error) {
            Alert.alert("não foi possível carregar os dados, tente novamente");
        }
    }
    return (
        <>
            <UserWrapper />
            <HomeCardsContainer transactionsData={transactionsData} />
            <MainWrapper>
                <Dashboard transactionsData={transactionsData} />
            </MainWrapper>
        </>
    );
}
