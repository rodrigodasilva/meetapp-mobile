import React from 'react';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Logo,
  FormInput,
  ButtonSubmit,
  LinkSignIn,
  TextLinkSignIn,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <FormInput
          icon="mail-outline"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
        />

        <ButtonSubmit onPress={() => {}}>Entrar</ButtonSubmit>

        <LinkSignIn>
          <TextLinkSignIn>Criar uma conta</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
