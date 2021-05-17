import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
const Home = () => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />

      <Text>Ola mundo</Text>
    </Container>
  );
};

export default Home;
