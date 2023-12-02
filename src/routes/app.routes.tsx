import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Search } from "../pages/Search";

const Bottom = createBottomTabNavigator();

export const AppRoutes: React.FunctionComponent = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name="Home" component={Home} />

            <Bottom.Screen name="Profile" component={Profile} />

            <Bottom.Screen name="Search" component={Search} />
        </Bottom.Navigator>
    );
};
