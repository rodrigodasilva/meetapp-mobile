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

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <FormInput
          icon="mail-outline"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          placeholder="Digite seu nome"
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
        />

        <ButtonSubmit onPress={() => {}}>Entrar</ButtonSubmit>

        <LinkSignIn onPress={() => navigation.navigate('SignUp')}>
          <TextLinkSignIn>Criar uma conta</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
