import formatDistance from "date-fns/formatDistance";
import ptBR from "date-fns/locale/pt-BR";
import React, { useState } from "react";
import { IPost } from "../../interfaces";
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

    const handleLike = () => {
        setLike(current => (current == true ? false : true));
    };

    const formatedDatePost = () => {
        const datePost = new Date(item?.created.seconds * 1000);

        return formatDistance(new Date(), datePost, {
            locale: ptBR,
        });
    };

    return (
        <Container style={{ elevation: 5 }}>
            <Header activeOpacity={0.7} onPress={() => console.log(item.autor)}>
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
                        onPress={handleLike}
                        name={like ? "heart" : "heart-outline"}
                    />
                    <Likes>
                        - {item?.likes}
                        {item?.likes > 1 ? " curtidas" : " curtida"}
                    </Likes>
                </ViewLikes>
                <TimePost>há {formatedDatePost()}</TimePost>
            </Actions>
        </Container>
    );
};
