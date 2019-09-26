import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { signInRequest, signUpFailure } from '~/store/modules/auth/actions';

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
  email: Yup.string()
    .email('Insira um email válido')
    .required('Insira seu email'),
  password: Yup.string().required('Insira sua senha'),
});

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  dispatch(signUpFailure());

  const passwordRef = useRef();

  function handleSubmitUser(user) {
    dispatch(signInRequest(user.email, user.password));
  }

  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => handleSubmitUser(values)}
          validationSchema={validateSchema}
        >
          {({
            values,
            handleChange,
            setFieldTouched,
            touched,
            errors,
            handleSubmit,
          }) => (
            <>
              <FormInput
                icon="mail-outline"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                placeholder="Digite seu nome"
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
                returnKeyType="send"
                ref={passwordRef}
                onSubmitEditing={handleSubmit}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                error={touched.password && errors.password}
              />
              {touched.password && errors.password && (
                <TextError>{errors.password}</TextError>
              )}

              <ButtonSubmit onPress={handleSubmit}>Entrar</ButtonSubmit>
            </>
          )}
        </Formik>
        <LinkSignIn onPress={() => navigation.navigate('SignUp')}>
          <TextLinkSignIn>Criar uma conta</TextLinkSignIn>
        </LinkSignIn>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
