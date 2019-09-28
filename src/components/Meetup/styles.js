import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  margin: 10px 20px;
  border-radius: 4px;
  min-height: 300px;
  justify-content: ${props => (props.loading ? 'center' : 'space-between')};
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Body = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

export const ViewTextItem = styled.View`
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TextItem = styled.Text`
  font-size: 13px;
  color: #999999;
  margin-left: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  width: 100%;
  height: 40px;
  padding: 12px;
  background: #f94d6a;
  border-radius: 4px;

  display: ${props => (props.past ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const TextSubcripted = styled.Text`
  color: #f94d6a;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  align-self: center;
`;
