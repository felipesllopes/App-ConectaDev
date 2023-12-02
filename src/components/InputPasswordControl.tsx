import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styled from "styled-components/native";
import { IPropsInputControl } from "../interfaces";

export const InputPasswordControl: React.FunctionComponent<
    IPropsInputControl
> = ({ control, name, errors, ...otherProps }) => {
    const [textSecure, setTextSecure] = useState(true);

    const handleSecureText = () => {
        setTextSecure(current => (current == true ? false : true));
    };

    return (
        <View>
            <ViewInputPassword
                style={{
                    elevation: 3,
                    borderColor: errors && "#ff375b",
                }}
            >
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <InputPassword
                            value={value}
                            onChangeText={onChange}
                            secureTextEntry={textSecure}
                            autoCapitalize={"none"}
                            {...otherProps}
                        />
                    )}
                />
                <IconSecure
                    onPress={handleSecureText}
                    name={textSecure ? "eye-off" : "eye"}
                />
            </ViewInputPassword>
            {errors && <TextError>{errors}</TextError>}
        </View>
    );
};

const ViewInputPassword = styled.View`
    margin-bottom: 30px;
    padding: 4px 10px;
    border-radius: 10px;
    border-width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: row;
    align-items: center;
`;

const InputPassword = styled.TextInput`
    font-size: 19px;
    flex: 1;
`;

const IconSecure = styled(Ionicons)`
    font-size: 25px;
    padding: 0 5px;
    color: gray;
`;

const TextError = styled.Text`
    position: absolute;
    bottom: 6px;
    font-size: 15px;
    margin-left: 5px;
    color: #ff375b;
`;
