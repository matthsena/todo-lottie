import styled from 'styled-components/native';
import { ThemeProviderType } from '../Theme';

export const Text = styled.Text`
  color: ${({ theme }: { theme: ThemeProviderType }) => theme.colors.font};
`;
