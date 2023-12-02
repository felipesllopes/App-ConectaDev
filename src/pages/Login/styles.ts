import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.lightTeal};
`;

export const Scroll = styled.ScrollView`
    flex: 1;
    padding: 0 20px;
`;

export const Logo = styled.Image`
    height: 34px;
    width: 255px;
    align-self: center;
    margin: 150px 0 50px;
`;
