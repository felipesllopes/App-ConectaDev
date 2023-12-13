import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.darkTeal};
    border-radius: 5px;
    padding: 6px 0;
    margin: 15px 0;
`;

export const User = styled.Text`
    font-size: 19px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 20px;
`;
