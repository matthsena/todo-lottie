import styled from 'styled-components/native';
import { ThemeProviderType } from '../Theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }: { theme: ThemeProviderType }) =>
    theme.colors.background};
`;

export const Spacer = styled.View`
  flex: 1;
`;

export const BottomSheetContainer = styled.View`
  background-color: ${({ theme }: { theme: ThemeProviderType }) =>
    theme.colors.bottomSheet};
`;
