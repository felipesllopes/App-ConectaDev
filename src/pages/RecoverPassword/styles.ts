import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.lightTeal};
`;

export const Scroll = styled.ScrollView`
    flex: 1;
    padding: 0 20px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkTeal};
    margin: 30px 0 20px;
`;

export const Text = styled.Text`
    font-size: 16px;
    margin: 4px;
`;
