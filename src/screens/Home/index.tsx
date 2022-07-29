import React from "react";
import HomeCardsContainer from "../../components/HomeCardsContainer";
import Dashboard from "./Dashboard";
import { MainWrapper } from "../../global/styles/theme";
import UserWrapper from "../UserWrapper";

export default function Home() {
    return (
        <>
            <UserWrapper />
            <HomeCardsContainer />
            <MainWrapper>
                <Dashboard />
            </MainWrapper>
        </>
    );
}
