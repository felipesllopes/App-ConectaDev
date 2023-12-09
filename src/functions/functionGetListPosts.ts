import firestore from "@react-native-firebase/firestore";
import { IPost } from "../interfaces";

export const functionGetListPosts = async (
    emptyList: boolean,
    setLoading: (value: React.SetStateAction<boolean>) => void,
    loading: boolean,
    lastItem: object,
    setEmptyList: (value: React.SetStateAction<boolean>) => void,
    setLastItem: (value: React.SetStateAction<object>) => void,
    setPosts: (value: React.SetStateAction<IPost[]>) => void,
) => {
    if (emptyList) {
        setLoading(false);
        return null;
    }

    if (loading) return;

    await firestore()
        .collection("posts")
        .orderBy("created", "desc")
        .limit(5)
        .startAfter(lastItem)
        .get()
        .then(snapshot => {
            const list = [];

            snapshot.docs.map(dat => {
                list.push({
                    ...dat.data(),
                    id: dat.id,
                });
            });

            setEmptyList(snapshot.empty);
            setLastItem(snapshot.docs[snapshot.docs.length - 1]);
            setPosts(current => [...current, ...list]);
            setLoading(false);
        });
};
