import React from "react";
import styled from "styled-components/native";

export const Header: React.FunctionComponent = () => {
    return (
        <Container>
            <Logo
                source={require("../assets/logo-white.png")}
                resizeMode="contain"
            />
        </Container>
    );
};

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.colors.darkTeal};
    padding: 14px;
    border-bottom-width: 1px;
`;

export const Logo = styled.Image`
    height: ${126 * 0.2}px;
    width: ${856 * 0.2}px;
    align-self: center;
`;
