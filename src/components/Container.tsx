import styled from 'styled-components/native';
import { ThemeProviderType } from '../Theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: ThemeProviderType }) =>
    theme.colors.background};
`;
