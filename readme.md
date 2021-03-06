<h1 align="center">

![](src/assets/logo-circle.png)
<br />
Meetapp Mobile

</h1>

<p align="center">
  <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> |
  <a href="#como-usar">Como Usar</a> |
  <a href="#funcionalidades">Funcionalidades</a>

</p>

<div align="center">

![](src/assets/meetapp_mobile.png)

</div>

Esta é a parte frontend mobile de um projeto desenvolvido para o desafio final no Bootcamp da Rocketseat. Nele desenvolvemos um serviço onde os usuários podem criar eventos através da [aplicação Web](https://github.com/rodrigodasilva/meetapp-front-web) feita em ReactJS, e se inscrever nestes eventos utilizando este aplicativo feito em React-native, sendo toda a lógica gerenciada pela [api](https://github.com/rodrigodasilva/backend-meetapp) desenvolvida em NodeJS.

## Tecnologias utilizadas

- [axios](https://github.com/axios/axios)
- [date-fns](https://github.com/date-fns/date-fns)
- [immer](https://github.com/immerjs/immer)
- [prop-types](https://github.com/facebook/prop-types)
- [react](https://github.com/facebook/react)
- [react-native](https://github.com/facebook/react-native)
- [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler)
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [react-native-shimmer-placeholder](https://github.com/tomzaku/react-native-shimmer-placeholder)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-redux](https://github.com/reduxjs/react-redux)
- [reactotron-react-native](https://github.com/infinitered/reactotron-react-native)
- [reactotron-redux](https://github.com/infinitered/reactotron-redux)
- [reactotron-redux-saga](https://github.com/infinitered/reactotron-redux-saga)
- [redux](https://github.com/reduxjs/redux)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [styled-components](https://github.com/styled-components/styled-components)

## Como usar

Pré-requisitos:

- Yarn/Npm
- Emulador configurado para o react-native
- [Back-end](https://github.com/rodrigodasilva/backend-meetapp) da aplicação rodando



Tendo isso, rodamos o comando yarn para fazer a instalação das dependências passadas no package.json

> yarn	

Startamos o aplicativo

> react-native start

E carregamos no emulador do android

> react-native run-android

Ou, no emulador do iphone

> react-native run-ios

## Funcionalidades

- Autenticação
- Visualização dos meetups
- Inscrição em meetups nos quais você não é organizador
- Cancelamento das inscrições
- Edição de dados do perfil
