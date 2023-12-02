import styled from "styled-components/native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IScreenNavigation } from "../interfaces";

interface IProps {
    title: string;
    subtitle: string;
    screen: string;
}

export const AccessButton: React.FunctionComponent<IProps> = ({
    title,
    subtitle,
    screen,
}) => {
    const { navigate } = useNavigation<IScreenNavigation>();

    return (
        <TextUnderline>
            {title}
            <TextButtonUnderline onPress={() => navigate(screen)}>
                {subtitle}
            </TextButtonUnderline>
            .
        </TextUnderline>
    );
};

export const TextUnderline = styled.Text`
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
`;

export const TextButtonUnderline = styled.Text`
    text-decoration: underline;
    font-weight: bold;
`;
