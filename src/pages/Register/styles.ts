import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const Title = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.darkTeal};
    margin: 50px 0 20px;
`;
