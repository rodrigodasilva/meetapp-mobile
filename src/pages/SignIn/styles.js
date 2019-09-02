import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Logo = styled.Image`
  margin-bottom: 50px;
  width: 41px;
  height: 42px;
`;

export const FormInput = styled(Input)`
  font-size: 18px;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 4px;
`;

export const ButtonSubmit = styled(Button)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
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
