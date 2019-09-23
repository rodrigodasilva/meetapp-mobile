import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as Yup from 'yup';
import { Formik } from 'formik';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  TextError,
  Separator,
  ButtonSubmit,
  ButtonSignOut,
} from './styles';

const validateSchema = Yup.object().shape({
  name: Yup.string().required('Insira seu nome de usuário'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Insira seu email'),
  oldPassword: Yup.string().when('confirmPassword', {
    is: val => !!(val && val.length >= 6),
    then: Yup.string().required('Insira a senha atual'),
  }),
  password: Yup.string().min(6, 'Insira uma senha com no mínimo 6 caracteres'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'As senhas não combinam'
  ),
});

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);

  const initialValues = {
    name: profile.name,
    email: profile.email,
    oldPassword: '',
    password: '',
    confirmPassword: '',
  };

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmitProfile(
    { name, email, oldPassword, password, confirmPassword },
    resetForm
  ) {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );

    resetForm({
      name,
      email,
      oldPassword: '',
      password: '',
      confirmPassword: '',
    });
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <TopBar />

      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) =>
            handleSubmitProfile(values, resetForm)
          }
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
              <Form>
                <FormInput
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
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Digite seu email"
                  ref={emailRef}
                  returnKeyType="next"
                  onSubmitEditing={() => oldPasswordRef.current.focus()}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                  <TextError>{errors.email}</TextError>
                )}
                <Separator />

                <FormInput
                  secureTextEntry
                  placeholder="Digite sua senha atual"
                  ref={oldPasswordRef}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  value={values.oldPassword}
                  onChangeText={handleChange('oldPassword')}
                  onBlur={() => setFieldTouched('oldPassword')}
                  error={touched.oldPassword && errors.oldPassword}
                />
                {touched.oldPassword && errors.oldPassword && (
                  <TextError>{errors.oldPassword}</TextError>
                )}
                <FormInput
                  secureTextEntry
                  placeholder="Digite sua nova senha"
                  ref={passwordRef}
                  returnKeyType="next"
                  onSubmitEditing={() => confirmPasswordRef.current.focus()}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  error={touched.password && errors.password}
                />
                {touched.password && errors.password && (
                  <TextError>{errors.password}</TextError>
                )}
                <FormInput
                  secureTextEntry
                  placeholder="Confirmação de senha"
                  ref={confirmPasswordRef}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  error={touched.confirmPassword && errors.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <TextError>{errors.confirmPassword}</TextError>
                )}

                <ButtonSubmit
                  onPress={handleSubmit}
                  disabled={!isValid}
                  loading={loading}
                >
                  Atualizar pefil
                </ButtonSubmit>

                <ButtonSignOut onPress={handleSignOut}>Sair</ButtonSignOut>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
