import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

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

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const created = useSelector(state => state.auth.created);

  useEffect(() => {
    if (created) {
      navigation.navigate('SignIn');
    }
  }, [created, navigation]);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <FormInput
          icon="person-outline"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <ButtonSubmit onPress={handleSubmit}>Criar</ButtonSubmit>

        <LinkSignIn onPress={() => navigation.navigate('SignIn')}>
          <TextLinkSignIn>Já sou cadastrado</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
