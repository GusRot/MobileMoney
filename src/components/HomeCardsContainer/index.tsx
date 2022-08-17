import React, { useState } from "react";
import { DataTransactionSave } from "../../screens/Home/Dashboard/Interface";
import HomeCards from "./HomeCards";
import { HomeCardContainer } from "./style";

interface HomeCardsContainerProps {
    transactionsData: DataTransactionSave[];
}

interface HomeCardsTransactions {
    title: string;
    amount: string;
    date: string;
    type: "up" | "down" | "total";
}

interface CardsTransactions {
    income: HomeCardsTransactions;
    outcome: HomeCardsTransactions;
    totals: HomeCardsTransactions;
}

export default function HomeCardsContainer({
    transactionsData,
}: HomeCardsContainerProps) {
    const [cardsTransactions, setCardsTransactions] =
        useState<CardsTransactions>({} as CardsTransactions);
    let incomeTransactionAmount = 0;
    let incomeTransactionDate = 0;
    let outcomeTransactionAmount = 0;
    let outcomeTransactionDate = 0;
    let finalDate = 0;
    transactionsData.map((transaction, index) => {
        const newDate = new Date(transaction.date).getTime();
        if (transaction.type === "income") {
            incomeTransactionAmount += transaction.amount;
            if (incomeTransactionDate < newDate) {
                incomeTransactionDate = newDate;
            }
        } else {
            outcomeTransactionAmount += transaction.amount;
            if (outcomeTransactionDate < newDate) {
                outcomeTransactionDate = newDate;
            }
        }

        if (index === transactionsData.length - 1) {
            finalDate = Math.max(outcomeTransactionDate, incomeTransactionDate);
            const newTransactions: CardsTransactions = {
                income: {
                    date: incomeTransactionDate
                        ? Intl.DateTimeFormat("pt-BR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                          }).format(new Date(incomeTransactionDate))
                        : "nenhuma transação",
                    amount: incomeTransactionAmount.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }),
                    title: "entrada",
                    type: "up",
                },
                outcome: {
                    date: outcomeTransactionDate
                        ? Intl.DateTimeFormat("pt-BR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                          }).format(new Date(outcomeTransactionDate))
                        : "nenhuma transação",
                    amount: outcomeTransactionAmount.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }),
                    title: "saida",
                    type: "down",
                },
                totals: {
                    date: finalDate
                        ? Intl.DateTimeFormat("pt-BR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                          }).format(new Date(finalDate))
                        : "nenhuma transação",
                    amount: (
                        incomeTransactionAmount - outcomeTransactionAmount
                    ).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }),
                    title: "total",
                    type: "total",
                },
            };

            if (
                JSON.stringify(cardsTransactions) !==
                JSON.stringify(newTransactions)
            ) {
                setCardsTransactions({ ...newTransactions });
            }
        }
    });

    if (Object.keys(cardsTransactions).length) {
        const transactions = Object.keys(cardsTransactions) as Array<
            keyof CardsTransactions
        >;
        return (
            <HomeCardContainer>
                {transactions.map((key) => (
                    <HomeCards
                        key={cardsTransactions[key].type}
                        title={cardsTransactions[key].title}
                        amount={cardsTransactions[key].amount}
                        date={cardsTransactions[key].date}
                        type={cardsTransactions[key].type}
                    />
                ))}
            </HomeCardContainer>
        );
    }

    return <></>;
}
