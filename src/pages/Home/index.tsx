import React from "react";
import { Container, Title } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { View } from "react-native";

export const Home: React.FunctionComponent = () => {
    const { user } = useContext(AuthContext);

    console.log(user);
    console.log(new Date().toLocaleDateString());

    return (
        <Container>
            {user && (
                <View>
                    <Title>Tela Home</Title>
                    <Title>{user.email}</Title>
                </View>
            )}
        </Container>
    );
};
