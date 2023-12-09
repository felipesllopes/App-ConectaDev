import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { Header } from "../../components/Header";
import { PostsList } from "../../components/PostsList";
import { AuthContext } from "../../contexts/auth";
import { functionGetListPosts } from "../../functions/functionGetListPosts";
import { functionHandleListPosts } from "../../functions/functionHandleListPosts";
import { functionHandleRefreshPosts } from "../../functions/functionHandleRefreshPosts";
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
    const [loadingRefresh, setLoadingRefresh] = useState<boolean>(false);
    const [lastItem, setLastItem] = useState<object>({});
    const [emptyList, setEmptyList] = useState<boolean>(false);

    useFocusEffect(
        useCallback(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let active = true;
            (async () => {
                await functionHandleListPosts(
                    active,
                    setPosts,
                    setEmptyList,
                    setLastItem,
                    setLoading,
                );
            })();

            return () => {
                active = false;
            };
        }, []),
    );

    // Buscar mais posts ao puxar lista
    const handleRefreshPosts = async () => {
        await functionHandleRefreshPosts(
            setPosts,
            setEmptyList,
            setLastItem,
            setLoadingRefresh,
        );
    };

    const getListPosts = async () => {
        await functionGetListPosts(
            emptyList,
            setLoading,
            loading,
            lastItem,
            setEmptyList,
            setLastItem,
            setPosts,
        );
    };

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
                    refreshing={loadingRefresh}
                    onRefresh={handleRefreshPosts}
                    onEndReached={() => getListPosts()}
                    onEndReachedThreshold={0.1}
                />
            )}

            <ButtonPost activeOpacity={0.7} onPress={() => navigate("NewPost")}>
                <IconNewPost name="edit-2" />
            </ButtonPost>
        </Container>
    );
};
