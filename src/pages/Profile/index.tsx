import React, { useContext } from "react";
import { SendButton } from "../../components/SendButton";
import { AuthContext } from "../../contexts/auth";
import { Container, Title } from "./styles";
import { View } from "react-native";

export const Profile: React.FunctionComponent = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            {user && (
                <Container>
                    <Title>{user.email}</Title>
                    <SendButton title="Sair" onPress={logOut} />
                </Container>
            )}
        </View>
    );
};
