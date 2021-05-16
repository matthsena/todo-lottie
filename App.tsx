import React from 'react';
// import { StyleSheet } from 'react-native';
import Theme from './src/Theme';
import { Container } from './src/components/Container';
import { Text } from './src/components/Text';

const App = () => {
  return (
    <Theme>
      <Container>
        <Text>Ola</Text>
      </Container>
    </Theme>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

export default App;
