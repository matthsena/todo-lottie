import React from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { RoundedButton } from '../components/Button';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const Home = () => {
  const appearanceMode = useColorScheme();

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.notFountContent}>
        <LottieView
          source={
            appearanceMode === 'dark'
              ? require('../lottiefiles/empty-file-dark.json')
              : require('../lottiefiles/empty-file.json')
          }
          autoPlay
          loop
        />
        <Text style={styles.notFoundText}>Sem tarefas por enquanto...</Text>
      </View>

      <RoundedButton>
        <LottieView source={require('../lottiefiles/add.json')} autoPlay loop />
      </RoundedButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  notFountContent: {
    width: width * 0.8,
    height: width * 0.8,
  },
  notFoundText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.65,
  },
});

export default Home;
