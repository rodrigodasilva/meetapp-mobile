import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Logo,
  FormInput,
  TextError,
  ButtonSubmit,
  LinkSignIn,
  TextLinkSignIn,
} from './styles';

const validateSchema = Yup.object().shape({
  name: Yup.string().required('Insira um nome'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Insira seu email'),
  password: Yup.string()
    .min(6, 'Insira uma senha com no mínimo 6 caracteres')
    .required('Insira sua senha'),
});

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const created = useSelector(state => state.auth.created);

  useEffect(() => {
    if (created) {
      navigation.navigate('SignIn');
    }
  }, [created, navigation]);

  function handleSubmitUser(user) {
    dispatch(signUpRequest(user.name, user.email, user.password));
  }

  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={values => handleSubmitUser(values)}
          validationSchema={validateSchema}
        >
          {({
            values,
            handleChange,
            setFieldTouched,
            touched,
            errors,
            isValid,
            handleSubmit,
          }) => (
            <>
              <FormInput
                icon="person-outline"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu nome"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                error={touched.name && errors.name}
              />
              {touched.name && errors.name && (
                <TextError>{errors.name}</TextError>
              )}

              <FormInput
                icon="mail-outline"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu email"
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <TextError>{errors.email}</TextError>
              )}
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Digite sua senha"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                error={touched.password && errors.password}
              />
              {touched.password && errors.password && (
                <TextError>{errors.password}</TextError>
              )}

              <ButtonSubmit onPress={handleSubmit}>Criar</ButtonSubmit>
            </>
          )}
        </Formik>
        <LinkSignIn onPress={() => navigation.navigate('SignIn')}>
          <TextLinkSignIn>Já sou cadastrado</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}
