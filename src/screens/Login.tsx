import React from 'react';
import { View, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, Spacer } from '../components/Container';
import { Text } from '../components/Text';
import { Button, ButtonText } from '../components/Button';

import { Props } from '../../routes';

const { width } = Dimensions.get('window');

const App = (props: Props) => {
  const appearanceMode = useColorScheme();

  const onGoHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <Container>
      <LottieView
        source={
          appearanceMode === 'dark'
            ? require('../lottiefiles/blue-man-dark.json')
            : require('../lottiefiles/blue-man.json')
        }
        autoPlay
        loop
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>ToDo Lottie</Text>
        <Text style={styles.subtitle}>App desenvolvido com Lottie</Text>
      </View>
      <Spacer />
      <Button onPress={() => onGoHome()}>
        <LottieView
          source={require('../lottiefiles/arrow.json')}
          autoPlay
          loop
          style={styles.buttonAnimation}
        />
        <ButtonText>Iniciar</ButtonText>
      </Button>
    </Container>
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
