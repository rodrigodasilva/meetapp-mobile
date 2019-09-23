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

export const Logo = styled.Image`
  margin-bottom: 40px;
  width: 41px;
  height: 42px;
`;

export const FormInput = styled(Input)`
  font-size: 18px;
  margin-top: 10px;
  height: 50px;
  border-radius: 4px;
  border: ${props => (props.error ? '2px solid #f94d6a' : 'none')};
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: #f94d6a;
  align-self: flex-start;
`;

export const ButtonSubmit = styled(Button)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  height: 50px;
  width: 100%;
  border-radius: 4px;
`;

export const LinkSignIn = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const TextLinkSignIn = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: bold;
`;
