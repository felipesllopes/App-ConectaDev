import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styled from "styled-components/native";
import { IPropsInputControl } from "../interfaces";

export const InputControl: React.FunctionComponent<IPropsInputControl> = ({
    control,
    name,
    errors,
    ...otherProps
}) => {
    return (
        <View>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input
                        value={value}
                        onChangeText={onChange}
                        {...otherProps}
                        style={{
                            elevation: 3,
                            borderColor: errors && "#ff375b",
                        }}
                    />
                )}
            />
            {errors && <TextError>{errors}</TextError>}
        </View>
    );
};

const Input = styled.TextInput`
    margin-bottom: 30px;
    font-size: 19px;
    padding: 4px 10px;
    border-radius: 10px;
    border-width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
`;

const TextError = styled.Text`
    position: absolute;
    bottom: 6px;
    font-size: 15px;
    margin-left: 5px;
    color: #ff375b;
`;
