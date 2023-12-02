import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

const App: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <StatusBar backgroundColor={"#36393F"} />
                <Routes />
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default App;
