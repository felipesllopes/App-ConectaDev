import React from "react";
import { ActivityIndicator, View } from "react-native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FunctionComponent = () => {
    const signed = false;
    const loading = false;

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "blue",
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator size={50} />
            </View>
        );
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
};
