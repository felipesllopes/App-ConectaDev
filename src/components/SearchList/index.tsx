import React from "react";
import { IListUsers } from "../../pages/Search";
import { Container, User } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IScreenNavigationParans } from "../../interfaces";

interface IProps {
    item: IListUsers;
}

export const SearchList: React.FunctionComponent<IProps> = ({ item }) => {
    const { navigate } = useNavigation<IScreenNavigationParans>();

    return (
        <Container
            onPress={() =>
                navigate("PostsUser", {
                    autor: item.nomeUsuario,
                    userId: item.uid,
                })
            }
        >
            <User>{item.nome}</User>
        </Container>
    );
};
