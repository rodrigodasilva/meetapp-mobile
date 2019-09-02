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
          icon="person-outline"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
        />

        <ButtonSubmit onPress={() => {}}>Criar</ButtonSubmit>

        <LinkSignIn onPress={() => navigation.navigate('SignIn')}>
          <TextLinkSignIn>Já sou cadastrado</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
