import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import Dashboard from "./src/screens/UserWrapper";
import { theme } from "./src/global/styles/theme";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import HomeCardsContainer from "./src/components/HomeCardsContainer";

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
            <HomeCardsContainer />
        </ThemeProvider>
    );
}
