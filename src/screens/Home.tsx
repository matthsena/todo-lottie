import React from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { Container, Spacer } from '../components/Container';
import { Text } from '../components/Text';
import { RoundedButton, Button, ButtonText } from '../components/Button';
import LottieView from 'lottie-react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Input } from '../components/Input';
const { height, width } = Dimensions.get('window');

const Home = () => {
  const appearanceMode = useColorScheme();
  const sheetRef = React.useRef<any>(null);

  const onSave = () => {
    sheetRef?.current?.snapTo(1);
  };

  const renderContent = () => (
    <>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Adicionar nova tarefa</Text>
        <Text style={styles.panelSubtitle}>
          Crie e organize novas tarefas a serem realizadas
        </Text>
        <Input placeholder="Titulo da tarefa" maxLength={100} />
        <Input
          placeholder="Descrição (Opcional)"
          multiline={true}
          numberOfLines={4}
          maxLength={500}
        />
        <Spacer />
        <Button style={styles.modalButton} onPress={() => onSave()}>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </View>
    </>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

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

      <BottomSheet
        ref={sheetRef}
        snapPoints={[height * 0.8, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={false}
      />

      <RoundedButton onPress={() => sheetRef?.current?.snapTo(0)}>
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
  modalButton: {
    width: width - 32,
    alignSelf: 'flex-start',
  },
  panel: {
    height: height * 0.8,
    padding: 16,
    backgroundColor: '#eee',
  },
  header: {
    backgroundColor: '#eee',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  panelSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 8,
    textAlign: 'center',
  },
});

export default Home;
