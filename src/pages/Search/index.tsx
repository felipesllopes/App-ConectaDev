import firestore from "@react-native-firebase/firestore";
import React, { useEffect, useState } from "react";
import { SearchList } from "../../components/SearchList";
import {
    AreaInput,
    Container,
    IconSearch,
    InputSearch,
    ListUsers,
} from "./styles";

export interface IListUsers {
    id: string;
    nome: string;
    nomeUsuario: string;
    uid: string;
    criado: string;
}

export const Search: React.FunctionComponent = () => {
    const [inputName, setInputName] = useState<string>("");
    const [users, setUsers] = useState<IListUsers[]>([]);

    useEffect(() => {
        if (inputName === "" || inputName === undefined) {
            setUsers([]);
            return;
        }

        const subscriber = firestore()
            .collection("users")
            .where("nome", ">=", inputName)
            .where("nome", "<=", inputName + "\uf8ff")
            .onSnapshot(snapshot => {
                const listUsers = [];

                snapshot.forEach(doc => {
                    listUsers.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });
                setUsers(listUsers);
            });

        return () => subscriber();
    }, [inputName]);

    const handleSearch = () => {
        console.log(inputName);
    };

    return (
        <Container>
            <AreaInput>
                <IconSearch name="search" onPress={handleSearch} />
                <InputSearch
                    value={inputName}
                    onChangeText={setInputName}
                    placeholder="Usuário"
                />
            </AreaInput>

            <ListUsers
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <SearchList item={item} />}
            />
        </Container>
    );
};
