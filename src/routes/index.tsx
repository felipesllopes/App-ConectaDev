import React, { useContext } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { AuthContext } from "../contexts/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FunctionComponent = () => {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return <LoadingScreen />;
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
};
