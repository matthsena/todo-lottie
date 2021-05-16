import styled from 'styled-components/native';
import { ThemeProviderType } from '../Theme';

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
