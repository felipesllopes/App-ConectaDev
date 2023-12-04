import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./src/contexts/auth";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/routes";

const App: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <StatusBar backgroundColor={"#36393F"} />
                    <Routes />
                </ThemeProvider>
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
