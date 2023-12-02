import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../pages/Login";
import { RecoverPassword } from "../pages/RecoverPassword";
import { Register } from "../pages/Register";

const Stack = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="RecoverPassword"
                component={RecoverPassword}
                options={{ title: "Voltar" }}
            />
        </Stack.Navigator>
    );
};
