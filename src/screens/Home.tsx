import React, { useState } from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import { Container, Spacer } from '../components/Container';
import { Text } from '../components/Text';
import { Button, ButtonText, RoundedButton } from '../components/Button';
import { Input } from '../components/Input';
import LottieView from 'lottie-react-native';

const { height, width } = Dimensions.get('window');

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const appearanceMode = useColorScheme();

  const onSave = () => {
    setModalVisible(false);
  };

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

      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Adicione uma nova tarefa:</Text>
            <Input
              style={styles.modalInput}
              placeholder="Titulo da tarefa"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />

            <Input
              style={styles.modalInput}
              placeholder="Descrição (opcional)"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              multiline={true}
              numberOfLines={4}
            />
            <Spacer />
            <Button style={styles.modalButton} onPress={() => onSave()}>
              <ButtonText>Salvar</ButtonText>
            </Button>
          </View>
        </Modal>
      </View>

      <RoundedButton onPress={() => setModalVisible(true)}>
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
  modalView: {
    position: 'absolute',
    width: width * 0.8,
    left: width * 0.1,
    top: height * 0.5,
    backgroundColor: '#eee',
    borderRadius: 16,
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: 0.2,
    padding: 16,
  },
  modalText: {
    marginBottom: 16,
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
  },
  modalButton: {
    marginBottom: 0,
    width: width * 0.8 - 32,
  },
  modalInput: {
    width: width * 0.8 - 32,
    borderColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: 0.2,
    fontWeight: 'normal',
    textAlign: 'left',
    paddingLeft: 16,
  },
});

export default Home;
