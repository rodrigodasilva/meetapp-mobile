import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  font-size: 18px;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 4px;
`;

export const Separator = styled.View`
  /* height: 1px; */
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonSubmit = styled(Button)`
  background: #e5556e;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
  height: 50px;
  width: 100%;
  border-radius: 4px;
`;

export const ButtonSignOut = styled(Button)`
  background: #d44059;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  height: 42px;
  width: 100%;
  border-radius: 4px;
`;
