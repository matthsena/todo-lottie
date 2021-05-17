import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProviderType } from '../Theme';

const { width } = Dimensions.get('window');

export const Button = styled.TouchableOpacity`
  padding: 16px;
  width: 80%;
  margin-bottom: 64px;
  border-radius: 8px;
  background-color: ${({ theme }: { theme: ThemeProviderType }) =>
    theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const RoundedButton = styled.TouchableOpacity`
  width: ${width * 0.18}px;
  height: ${width * 0.18}px;
  border-radius: ${width * 0.5}px;
  position: absolute;
  bottom: 32px;
  right: 16px;
  background-color: ${({ theme }: { theme: ThemeProviderType }) =>
    theme.colors.primary};
`;
