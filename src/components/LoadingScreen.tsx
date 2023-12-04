import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const LoadingScreen: React.FunctionComponent = () => {
    return (
        <Container>
            <Logo source={require("../assets/logo.png")} resizeMode="contain" />
            <ActivityIndicator size={40} color={"#004868"} />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.lightTeal};
`;

const Logo = styled.Image`
    height: 39px;
    width: 295px;
    margin-bottom: 50px;
`;
