import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../pages/Home";
import { NewPost } from "../pages/NewPost";
import { Profile } from "../pages/Profile";
import { Search } from "../pages/Search";
import { PostsUser } from "../pages/PostsUser";

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackRoutes: React.FunctionComponent = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NewPost"
                component={NewPost}
                options={{
                    title: "Novo Post",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: "#004868" },
                }}
            />
            <Stack.Screen
                name="PostsUser"
                component={PostsUser}
                options={{
                    title: "Novo Post",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: "#004868" },
                }}
            />
        </Stack.Navigator>
    );
};

export const AppRoutes: React.FunctionComponent = () => {
    return (
        <Bottom.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#fff",

                tabBarStyle: {
                    backgroundColor: "#004868",
                    borderTopWidth: 0,
                },
            }}
        >
            <Bottom.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="home" color={color} size={size} />
                        );
                    },
                }}
            />

            <Bottom.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="search" color={color} size={size} />
                        );
                    },
                }}
            />

            <Bottom.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="user" color={color} size={size} />
                        );
                    },
                }}
            />
        </Bottom.Navigator>
    );
};
