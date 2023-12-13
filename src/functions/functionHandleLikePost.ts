import firestore from "@react-native-firebase/firestore";
import { IPost } from "../interfaces";

export const functionHandleLikePost = async (
    docId: string,
    userUid: string,
    item: IPost,
    likePost: number,
    setLikePost: (value: React.SetStateAction<number>) => void,
    setLike: (value: React.SetStateAction<boolean>) => void,
) => {
    // Checar se o post já foi curtido
    await firestore()
        .collection("likes")
        .doc(docId)
        .get()
        .then(async doc => {
            // Se já curtiu, então entrará no nó, removerá a curtida e o excluirá
            if (doc.exists) {
                await firestore()
                    .collection("posts")
                    .doc(item.id)
                    .update({
                        likes: likePost - 1,
                    })
                    .then(async () => {
                        await firestore()
                            .collection("likes")
                            .doc(docId)
                            .delete()
                            .then(() => {
                                setLikePost(current => current - 1);
                                setLike(false);
                            })
                            .catch(error => {
                                console.log(error);
                                alert("Erro ao remover curtida.");
                            });
                    })
                    .catch(error => {
                        console.log(error);
                        alert("Erro ao dar deslike.");
                    });
                return;
            }

            await firestore()
                .collection("likes")
                .doc(docId)
                .set({
                    postId: item.id,
                    userId: userUid,
                })
                .then(async () => {
                    await firestore()
                        .collection("posts")
                        .doc(item.id)
                        .update({
                            likes: likePost + 1,
                        })
                        .then(() => {
                            setLikePost(current => current + 1);
                            setLike(true);
                        })
                        .catch(error => {
                            console.log(error);
                            alert("Erro ao curtir post.");
                        });
                })
                .catch(error => {
                    console.log(error);
                    alert("Erro ao curtir post.");
                });
        });
};
