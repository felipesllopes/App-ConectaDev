import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.lightTeal};
    padding: 10px;
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.gray};
    height: 230px;
    border-radius: 14px;
    padding: 10px;
`;

export const AlignItens = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.darkTeal};
    padding: 5px 12px;
    border-radius: 4px;
    border-width: 1px;
    align-self: center;
`;

export const ButtonText = styled.Text`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.white};
`;

export const TextLenght = styled.Text`
    color: #444;
    font-size: 16px;
`;
