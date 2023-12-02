import styled from "styled-components/native";
import React from "react";

interface IProps {
    title: string;
    onPress: () => void;
}

export const SendButton: React.FunctionComponent<IProps> = ({
    title,
    onPress,
}) => {
    return (
        <Button onPress={onPress} activeOpacity={0.7} style={{ elevation: 3 }}>
            <TextButton>{title}</TextButton>
        </Button>
    );
};

const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.darkTeal};
    padding: 4px 20px;
    border-radius: 5px;
    margin: 10px 0 20px;
    border-width: 2px;
`;

const TextButton = styled.Text`
    font-size: 19px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;
