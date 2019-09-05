import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DateMeetup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 24px;
`;

export const TextDate = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin: 0 15px;
`;

export const TextEmpty = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  opacity: 0.8;
`;
