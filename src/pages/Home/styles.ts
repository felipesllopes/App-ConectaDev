import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.lightTeal};
    padding: 10px;
`;

export const Title = styled.Text``;

export const ButtonPost = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.darkTeal};
    align-self: center;
    padding: 15px;
    position: absolute;
    bottom: 4%;
    right: 5%;
    border-radius: 50px;
    z-index: 5;
`;

export const IconNewPost = styled(Feather)`
    font-size: 23px;
    color: ${({ theme }) => theme.colors.white};
`;
