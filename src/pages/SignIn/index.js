import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

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

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

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

        <ButtonSubmit loading={loading} onPress={() => {}}>
          Entrar
        </ButtonSubmit>

        <LinkSignIn
          loading={loading}
          onPress={() => navigation.navigate('SignUp')}
        >
          <TextLinkSignIn>Criar uma conta</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
