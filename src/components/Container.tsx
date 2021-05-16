import styled from 'styled-components/native';
import { ThemeProviderType } from '../Theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }: { theme: ThemeProviderType }) =>
    theme.colors.background};
`;
