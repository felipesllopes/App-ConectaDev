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
    height: ${126 * 0.35}px;
    width: ${856 * 0.35}px;
    align-self: center;
    margin: 150px 0 50px;
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 0 20px;
    align-self: center;
`;

export const TextSection = styled.Text`
    font-size: 16px;
    margin-left: 10px;
`;

// Calculo para tamanho da logo: 0,31 x (856x126)
