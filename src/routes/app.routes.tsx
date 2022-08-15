import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "../screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
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
                    tabBarStyle: {
                        height: 90,
                    },
                }}
            >
                <Tab.Screen
                    name="Listagem"
                    component={Home}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons
                                name="format-list-bulleted"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastrar"
                    component={Register}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons
                                name="attach-money"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
