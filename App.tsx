import React from 'react';
import { View, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import Theme from './src/Theme';
import { Container, Spacer } from './src/components/Container';
import { Text } from './src/components/Text';
import { Button, ButtonText } from './src/components/Button';

const { width } = Dimensions.get('window');

const App = () => {
  const appearanceMode = useColorScheme();

  return (
    <Theme>
      <Container>
        <LottieView
          source={
            appearanceMode === 'dark'
              ? require('./src/lottiefiles/blue-man-dark.json')
              : require('./src/lottiefiles/blue-man.json')
          }
          autoPlay
          loop
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>ToDo Lottie</Text>
          <Text style={styles.subtitle}>App desenvolvido com Lottie</Text>
        </View>
        <Spacer />
        <Button>
          <LottieView
            source={require('./src/lottiefiles/arrow.json')}
            autoPlay
            loop
            style={styles.buttonAnimation}
          />
          <ButtonText>Iniciar</ButtonText>
        </Button>
      </Container>
    </Theme>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: width,
  },
  title: {
    marginTop: 64,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginVertical: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonAnimation: {
    marginLeft: width * 0.15,
    marginVertical: 2,
    marginBottom: 4,
  },
});

export default App;
