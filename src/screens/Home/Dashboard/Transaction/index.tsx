import React from "react";
import { TransactionsProps } from "../Interface";
import {
    Container,
    Amount,
    Date,
    Title,
    Type,
    Icon,
    TypeContainer,
    InformationContainer,
} from "./styles";

export default function Transaction({ data }: TransactionsProps) {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount color={data.type}>
                {data.type === "outcome" ? " - " : " "}
                {data.amount}
            </Amount>
            <InformationContainer>
                <TypeContainer>
                    <Icon name={data.category.icon} />
                    <Type>{data.category.name}</Type>
                </TypeContainer>
                <Date>{data.date}</Date>
            </InformationContainer>
        </Container>
    );
}
