import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { IListUsers } from ".";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.lightTeal};
    padding: 20px;
`;

export const AreaInput = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding: 6px 0;
    margin: 15px 0;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.darkTeal};
`;

export const IconSearch = styled(Ionicons)`
    font-size: 24px;
    padding: 4px 14px;
    color: ${({ theme }) => theme.colors.darkTeal};
`;

export const InputSearch = styled.TextInput`
    font-size: 19px;
    flex: 1;
    padding: 3px;
    margin-right: 10px;
`;

export const ListUsers = styled(
    FlatList as new (props: FlatListProps<IListUsers>) => FlatList<IListUsers>,
).attrs({
    contentContainerStyle: {
        padding: 10,
    },
})``;
