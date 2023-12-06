import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import firebase from "../../config/firebase";
import { AuthContext } from "../../contexts/auth";
import {
    AlignItens,
    Button,
    ButtonText,
    Container,
    Input,
    TextLenght,
} from "./styles";

export const NewPost: React.FunctionComponent = () => {
    const { user } = useContext(AuthContext);
    const [post, setPost] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null);
    const navigation = useNavigation();
    const limitCharacters = 300;

    const handlePost = async () => {
        await firebase
            .storage()
            .ref("users")
            .child(user?.uid)
            .getDownloadURL()
            .then(async imageUrl => {
                setAvatarUrl(await imageUrl);
            })
            .catch(() => {
                setAvatarUrl(null);
            });

        await firebase
            .firestore()
            .collection("posts")
            .add({
                created: new Date(),
                content: post,
                autor: user?.name,
                userId: user?.uid,
                likes: 0,
                avatarUrl,
            })
            .then(() => {
                setPost("");
                navigation.goBack();
            })
            .catch(error => {
                alert("Erro ao publicar post.");
                console.log(error);
            });
    };

    const handlePressOutside = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <Container>
                <Input
                    value={post}
                    onChangeText={setPost}
                    placeholder="O que há de novo?"
                    multiline={true}
                    placeholderTextColor={"#666"}
                    maxLength={limitCharacters}
                    textAlignVertical="top"
                />
                <AlignItens>
                    <TextLenght
                        style={{
                            color:
                                limitCharacters - post.length <= 10
                                    ? "#F00"
                                    : "#555",
                        }}
                    >
                        {post.length}/{limitCharacters}
                    </TextLenght>
                    <Button
                        disabled={post.length == 0 && true}
                        activeOpacity={0.7}
                        onPress={handlePost}
                    >
                        <ButtonText>Compartilhar</ButtonText>
                    </Button>
                </AlignItens>
            </Container>
        </TouchableWithoutFeedback>
    );
};
