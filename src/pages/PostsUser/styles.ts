import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { IPost } from "../../interfaces";

export const Container = styled.SafeAreaView``;

export const ListPosts = styled(
    FlatList as new (props: FlatListProps<IPost>) => FlatList<IPost>,
).attrs({
    contentContainerStyle: {
        padding: 10,
    },
})``;
