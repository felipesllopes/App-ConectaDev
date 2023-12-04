import React from "react";
import { Container, Title } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { View } from "react-native";
import { SendButton } from "../../components/SendButton";

export const Home: React.FunctionComponent = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <Container>
            {user && (
                <View>
                    <Title>Tela Home</Title>
                    <Title>{user.email}</Title>
                    <SendButton onPress={logOut} title="Sair" />
                </View>
            )}
        </Container>
    );
};
