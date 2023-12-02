import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputControl } from "../../components/InputControl";
import { SendButton } from "../../components/SendButton";
import { Container, Scroll, Text, Title } from "./styles";

interface IFormRecoverPassword {
    email: string;
}

export const RecoverPassword: React.FunctionComponent = () => {
    const schema = yup.object({
        email: yup
            .string()
            .email("E-mail inválido.")
            .required("Informe seu e-mail."),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRecoverPassword = (data: IFormRecoverPassword) => {
        alert(
            "E-mail enviado para " +
                data.email +
                "\nVerifique sua caixa de entrada.",
        );
        console.log(data);
    };

    return (
        <Container>
            <Scroll>
                <Title>Recuperar senha</Title>
                <Text>Digite o e-mail cadastrado</Text>

                <InputControl
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    control={control}
                    name="email"
                    errors={errors.email && (errors.email?.message as string)}
                />

                <SendButton
                    onPress={handleSubmit(handleRecoverPassword)}
                    title="Enviar"
                />
            </Scroll>
        </Container>
    );
};
