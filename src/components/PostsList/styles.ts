import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 10px 5px;
    padding: 10px;
    border-radius: 7px;
`;

export const Header = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
`;

export const AvatarUrl = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 30px;
    margin-right: 10px;
`;

export const Autor = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const Post = styled.Text`
    font-size: 17px;
    margin: 10px 2px;
    color: #424242;
`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ViewLikes = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LikeButton = styled(Ionicons)`
    font-size: 23px;
`;

export const Likes = styled.Text`
    margin-left: 4px;
    font-weight: bold;
`;

export const TimePost = styled.Text`
    font-weight: bold;
`;
