import { yupResolver } from "@hookform/resolvers/yup";
import Checkbox from "expo-checkbox";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AccessButton } from "../../components/AccessButton";
import { InputControl } from "../../components/InputControl";
import { InputPasswordControl } from "../../components/InputPasswordControl";
import { SendButton } from "../../components/SendButton";
import { AuthContext } from "../../contexts/auth";
import { Container, Logo, Scroll, Section, TextSection } from "./styles";

export interface IFormLogin {
    email: string;
    password: string;
}

export const Login: React.FunctionComponent = () => {
    const { signIn, checked, setChecked } = useContext(AuthContext);

    const schema = yup.object({
        email: yup
            .string()
            .email("E-mail inválido.")
            .required("Informe seu e-mail."),
        password: yup
            .string()
            .min(6, "Mínimo de 6 dígitos.")
            .required("Digite a sua senha."),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleLogin = (data: IFormLogin) => {
        signIn(data);
    };

    return (
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
                <Logo
                    source={require("../../assets/logo.png")}
                    resizeMode="contain"
                />

                <InputControl
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    control={control}
                    name="email"
                    errors={errors.email && (errors.email?.message as string)}
                />

                <InputPasswordControl
                    autoCapitalize="none"
                    placeholder="Senha"
                    control={control}
                    name="password"
                    errors={
                        errors.password && (errors.password?.message as string)
                    }
                />

                <AccessButton
                    title="Esqueci "
                    subtitle="minha senha"
                    screen="RecoverPassword"
                />

                <SendButton
                    onPress={handleSubmit(handleLogin)}
                    title="Entrar"
                />

                <Section>
                    <Checkbox value={checked} onValueChange={setChecked} />
                    <TextSection>Continuar conectado</TextSection>
                </Section>

                <AccessButton
                    title="Clique aqui para "
                    subtitle="se cadastrar"
                    screen="Register"
                />
            </Scroll>
        </Container>
    );
};
