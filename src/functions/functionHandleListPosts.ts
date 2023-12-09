import firestore from "@react-native-firebase/firestore";
import { IPost } from "../interfaces";

export const functionHandleListPosts = async (
    active: boolean,
    setPosts: (value: React.SetStateAction<IPost[]>) => void,
    setEmptyList: (value: React.SetStateAction<boolean>) => void,
    setLastItem: (value: React.SetStateAction<object>) => void,
    setLoading: (value: React.SetStateAction<boolean>) => void,
) => {
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
                setEmptyList(snapshot.empty);
                setPosts(list);
                setLastItem(snapshot.docs[snapshot.docs.length - 1]);
            }
        })
        .catch(error => {
            alert("Erro ao carregar Feed.");
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
};
