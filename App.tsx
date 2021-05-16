import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import Theme from './src/Theme';
import { Container } from './src/components/Container';
import { Text } from './src/components/Text';
import LottieView from 'lottie-react-native';

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
      </Container>
    </Theme>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
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
});

export default App;
