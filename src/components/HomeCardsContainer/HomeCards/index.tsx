import React from "react";
import {
    Container,
    CardHeader,
    CardTitle,
    CardIcon,
    CardValue,
    CardDate,
} from "./style";

interface CardsProps {
    title: string;
    amount: string;
    date: string;
    type: "up" | "down" | "total";
}

export default function HomeCards({ title, amount, date, type }: CardsProps) {
    const iconType = {
        up: "arrow-up-circle",
        down: "arrow-down-circle",
        total: "dollar-sign",
    };
    const displayDate =
        date !== "nenhuma transação"
            ? `Ultima transação: ${date}`
            : date[0].toUpperCase() + date.substr(1);
    return (
        <Container type={type}>
            <CardHeader>
                <CardTitle type={type}>{title}</CardTitle>
                <CardIcon name={iconType[type]} type={type} />
            </CardHeader>
            <CardValue type={type}>{amount}</CardValue>
            <CardDate type={type}>{displayDate}</CardDate>
        </Container>
    );
}
