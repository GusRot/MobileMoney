import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "../screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.secondary,
                    tabBarInactiveTintColor: theme.colors.text,
                    tabBarLabelPosition: "beside-icon",
                }}
            >
                <Tab.Screen name="listagem" component={Home} />
                <Tab.Screen name="Cadastrar" component={Register} />
                <Tab.Screen name="Resumo" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
