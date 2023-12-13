import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import formatDistance from "date-fns/formatDistance";
import ptBR from "date-fns/locale/pt-BR";
import React, { useEffect, useState } from "react";
import { functionHandleLikePost } from "../../functions/functionHandleLikePost";
import { IPost, IScreenNavigationParans } from "../../interfaces";
import {
    Actions,
    Autor,
    AvatarUrl,
    Container,
    Header,
    LikeButton,
    Likes,
    Post,
    TimePost,
    ViewLikes,
} from "./styles";

interface IProps {
    item: IPost;
    userUid: string;
}

export const PostsList: React.FunctionComponent<IProps> = ({
    item,
    userUid,
}) => {
    const [like, setLike] = useState<boolean>(false);
    const [likePost, setLikePost] = useState<number>(item?.likes);
    const { navigate } = useNavigation<IScreenNavigationParans>();

    useEffect(() => {
        (async () => {
            const docId = `${userUid}_${item.id}`;

            await firestore()
                .collection("likes")
                .doc(docId)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        setLike(true);
                    } else {
                        setLike(false);
                    }
                });
        })();
    }, [item.id, like, userUid]);

    const handleLikePost = async () => {
        const docId = `${userUid}_${item.id}`;

        // Checar se o post já foi curtido
        await functionHandleLikePost(
            docId,
            userUid,
            item,
            likePost,
            setLikePost,
            setLike,
        );
    };

    const formatedDatePost = () => {
        const datePost = new Date(item?.created.seconds * 1000);

        return formatDistance(new Date(), datePost, {
            locale: ptBR,
        });
    };

    return (
        <Container style={{ elevation: 5 }}>
            <Header
                activeOpacity={0.7}
                onPress={() =>
                    navigate("PostsUser", {
                        autor: item.autor,
                        userId: item.userId,
                    })
                }
            >
                <AvatarUrl
                    source={
                        item?.avatarUrl
                            ? { uri: item?.avatarUrl }
                            : require("../../assets/avatar.png")
                    }
                />
                <Autor numberOfLines={1}>{item?.autor.toLowerCase()}</Autor>
            </Header>
            <Post>{item?.content}</Post>
            <Actions>
                <ViewLikes>
                    <LikeButton
                        color={like ? "#d00" : "#000"}
                        onPress={handleLikePost}
                        name={like ? "heart" : "heart-outline"}
                    />
                    <Likes>
                        - {likePost}
                        {likePost > 1 ? " curtidas" : " curtida"}
                    </Likes>
                </ViewLikes>
                <TimePost>há {formatedDatePost()}</TimePost>
            </Actions>
        </Container>
    );
};
