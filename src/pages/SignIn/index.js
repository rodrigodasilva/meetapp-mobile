import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest, signUpFailure } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();

  dispatch(signUpFailure());

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

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
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <ButtonSubmit onPress={handleSubmit}>Entrar</ButtonSubmit>

        <LinkSignIn onPress={() => navigation.navigate('SignUp')}>
          <TextLinkSignIn>Criar uma conta</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
