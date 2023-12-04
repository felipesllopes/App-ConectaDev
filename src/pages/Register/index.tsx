import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AccessButton } from "../../components/AccessButton";
import { InputControl } from "../../components/InputControl";
import { InputPasswordControl } from "../../components/InputPasswordControl";
import { SendButton } from "../../components/SendButton";
import { AuthContext } from "../../contexts/auth";
import { Container, Scroll } from "../Login/styles";
import { Title } from "./styles";

export interface IFormRegister {
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Register: React.FunctionComponent = () => {
    const { signUp } = useContext(AuthContext);

    const schema = yup.object({
        name: yup.string().required("Digite seu nome completo."),
        userName: yup.string().required("Digite seu nome de usuário."),
        email: yup
            .string()
            .email("E-mail inválido.")
            .required("Informe seu e-mail."),
        password: yup
            .string()
            .min(6, "Mínimo de 6 dígitos.")
            .required("Digite a sua senha."),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Confirmação incorreta."),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRegister = (data: IFormRegister) => {
        signUp(data);
    };

    return (
        <Container>
            <Scroll>
                <Title>Cadastrar</Title>

                <InputControl
                    control={control}
                    name="name"
                    errors={errors.name && (errors.name?.message as string)}
                    autoCapitalize="words"
                    placeholder="Nome completo"
                />

                <InputControl
                    control={control}
                    name="userName"
                    errors={
                        errors.userName && (errors.userName?.message as string)
                    }
                    placeholder="Nome de usuário"
                />

                <InputControl
                    control={control}
                    name="email"
                    errors={errors.email && (errors.email?.message as string)}
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
                />

                <InputPasswordControl
                    control={control}
                    name="password"
                    errors={
                        errors.password && (errors.password?.message as string)
                    }
                    placeholder="Senha"
                    autoCapitalize="none"
                />

                <InputPasswordControl
                    control={control}
                    name="confirmPassword"
                    errors={
                        errors.confirmPassword &&
                        (errors.confirmPassword?.message as string)
                    }
                    placeholder="Confirme a senha"
                    autoCapitalize="none"
                />

                <SendButton
                    onPress={handleSubmit(handleRegister)}
                    title="Cadastrar"
                />

                <AccessButton
                    title="Clique aqui para "
                    subtitle="fazer login"
                    screen="Login"
                />
            </Scroll>
        </Container>
    );
};
