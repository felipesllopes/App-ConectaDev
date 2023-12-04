import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import firebase from "../config/firebase";
import { IFormLogin } from "../pages/Login";
import { IFormRegister } from "../pages/Register";

interface IAuthContext {
    signed: boolean;
    loading: boolean;
    user: IUser;
    signUp(data: IFormRegister): void;
    signIn(data: IFormLogin): void;
    logOut(): void;
}

interface IProps {
    children: React.ReactElement;
}

export interface IUser {
    email: string;
    name: string;
    userName: string;
    created: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [loading, setLoading] = useState<boolean>(false);

    const signUp = async (data: IFormRegister) => {
        setLoading(true);
        await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(async value => {
                const uid = value.user.uid;
                await firebase
                    .firestore()
                    .collection("users")
                    .doc(uid)
                    .set({
                        nome: data.name,
                        nomeUsuario: data.userName,
                        criado: new Date(),
                    })
                    .then(() => {
                        const dados = {
                            name: data.name,
                            userName: data.userName,
                            email: value.user.email,
                            created: new Date().toLocaleDateString(),
                        };
                        setUser(dados);
                    })
                    .catch(error => {
                        alert("Erro ao obter dados do usuário.");
                        console.log(error);
                    });
            })
            .catch(error => {
                alert("Erro ao cadastrar usuário.");
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const signIn = async (data: IFormLogin) => {
        setLoading(true);
        await firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(async value => {
                const uid = value.user.uid;
                await firebase
                    .firestore()
                    .collection("users")
                    .doc(uid)
                    .get()
                    .then(async values => {
                        const dados = {
                            name: values.data().nome,
                            userName: values.data().nomeUsuario,
                            email: value.user.email,
                            created: values.data().criado,
                        };
                        setUser(dados);
                    })
                    .catch(error => {
                        alert("Erro ao buscar os dados do usuário.");
                        console.log(error);
                    });
            })
            .catch(error => {
                alert("Erro ao tentar logar usuário.");
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const logOut = async () => {
        Alert.alert("Deseja sair?", "Você será deslogado da sua conta.", [
            {
                text: "Cancelar",
                style: "cancel",
            },
            {
                text: "Sair",
                onPress: async () => {
                    setLoading(true);
                    await firebase
                        .auth()
                        .signOut()
                        .then(() => {
                            setUser({} as IUser);
                        })
                        .catch(error => {
                            alert("Erro ao sair.");
                            console.log(error);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                },
            },
        ]);
    };

    return (
        <AuthContext.Provider
            value={{
                signed: !!user.email,
                loading,
                signUp,
                signIn,
                logOut,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
