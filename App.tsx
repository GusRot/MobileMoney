import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { theme } from "./src/global/styles/theme";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AppRoutes } from "./src/routes/app.routes";

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
            <AppRoutes />
        </ThemeProvider>
    );
}
