import firestore from "@react-native-firebase/firestore";
import {
    useFocusEffect,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import React, {
    useCallback,
    useContext,
    useLayoutEffect,
    useState,
} from "react";
import { ActivityIndicator } from "react-native";
import { PostsList } from "../../components/PostsList";
import { AuthContext } from "../../contexts/auth";
import { IPost } from "../../interfaces";
import { Container, ListPosts } from "./styles";

export const PostsUser: React.FunctionComponent = () => {
    const route = useRoute();
    const user = route.params as IPost;
    const navigation = useNavigation();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { user: uid } = useContext(AuthContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: user?.autor == "" ? "Usuário" : user?.autor,
        });
        console.log("Carregou");
    }, [navigation, user?.autor]);

    useFocusEffect(
        useCallback(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let active = true;
            firestore()
                .collection("posts")
                .where("userId", "==", user?.userId)
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
                        // setEmptyList(snapshot.empty);
                        setPosts(list);
                        setLoading(false);
                        // setLastItem(snapshot.docs[snapshot.docs.length - 1]);
                    }
                })
                .catch(error => {
                    alert("Erro ao carregar perfil do usuário");
                    console.log(error);
                });
            return () => {
                active = false;
            };
        }, [user?.userId]),
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
                        <PostsList item={item} userUid={uid.uid} />
                    )}
                    // refreshing={loadingRefresh}
                    // onRefresh={handleRefreshPosts}
                    // onEndReached={() => getListPosts()}
                    // onEndReachedThreshold={0.3}
                    // ListFooterComponent={
                    //     <FooterList load={loading} empty={emptyList} />
                    // }
                />
            )}
        </Container>
    );
};
