import firestore from "@react-native-firebase/firestore";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { Header } from "../../components/Header";
import { PostsList } from "../../components/PostsList";
import { AuthContext } from "../../contexts/auth";
import { IPost, IScreenNavigation } from "../../interfaces";
import {
    ButtonPost,
    Container,
    IconNewPost,
    ListPosts,
    Loading,
} from "./styles";

export const Home: React.FunctionComponent = () => {
    const { user } = useContext(AuthContext);
    const { navigate } = useNavigation<IScreenNavigation>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useFocusEffect(
        useCallback(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let active = true;
            (async () => {
                await firestore()
                    .collection("posts")
                    .orderBy("created", "desc")
                    .limit(5)
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
                        }
                    })
                    .catch(error => {
                        alert("Erro ao carregar Feed.");
                        console.log(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            })();

            return () => {
                active = false;
            };
        }, []),
    );

    return (
        <Container>
            <Header />

            {loading ? (
                <Loading size={"large"} />
            ) : (
                <ListPosts
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <PostsList item={item} userUid={user.uid} />
                    )}
                />
            )}

            <ButtonPost activeOpacity={0.7} onPress={() => navigate("NewPost")}>
                <IconNewPost name="edit-2" />
            </ButtonPost>
        </Container>
    );
};
