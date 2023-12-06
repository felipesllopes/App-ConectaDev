import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { IScreenNavigation } from "../../interfaces";
import { ButtonPost, Container, IconNewPost, Title } from "./styles";

export const Home: React.FunctionComponent = () => {
    const { user } = useContext(AuthContext);
    const { navigate } = useNavigation<IScreenNavigation>();

    return (
        <View style={{ flex: 1 }}>
            {user && (
                <Container>
                    <Title>Tela Home</Title>
                    <Title>{user.email}</Title>
                    <ButtonPost
                        activeOpacity={0.7}
                        onPress={() => navigate("NewPost")}
                    >
                        <IconNewPost name="edit-2" />
                    </ButtonPost>
                </Container>
            )}
        </View>
    );
};
