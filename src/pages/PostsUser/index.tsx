import firestore from "@react-native-firebase/firestore";
import {
    useFocusEffect,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { PostsList } from "../../components/PostsList";
import { IPost } from "../../interfaces";
import { Container, ListPosts } from "./styles";

interface RouteParams {
    autor?: string;
    userId?: string;
}

export const PostsUser: React.FunctionComponent = () => {
    const route = useRoute();
    const { autor, userId } = route.params as RouteParams;
    const navigation = useNavigation();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: autor == "" ? "Usuário" : autor,
        });
    }, [navigation, autor]);

    useFocusEffect(
        useCallback(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let active = true;
            firestore()
                .collection("posts")
                .where("userId", "==", userId)
                .orderBy("created", "desc")
                .get()
                .then(snapshot => {
                    if (active) {
                        setPosts([]);
                        const list = [];

                        snapshot.docs.map(dat => {
                            list.push({
                                ...dat.data(),
                                id: dat.id,
                            });
                        });
                        setPosts(list);
                        setLoading(false);
                    }
                })
                .catch(error => {
                    alert("Erro ao carregar perfil do usuário");
                    console.log(error);
                });
            return () => {
                active = false;
            };
        }, [userId]),
    );

    return (
        <Container>
            {loading ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <ListPosts
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <PostsList item={item} userUid={userId} />
                    )}
                />
            )}
        </Container>
    );
};
