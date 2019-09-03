import React from 'react';

import logo from '~/assets/logo.png';

import { Container, Logo } from './styles';

export default function TopBar() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
