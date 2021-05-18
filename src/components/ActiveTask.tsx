import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Spacer, BottomSheetContainer } from '../components/Container';
import { Text } from '../components/Text';
import { Button, ButtonText } from '../components/Button';
import LottieView from 'lottie-react-native';

const { height, width } = Dimensions.get('window');

interface Tasks {
  title: string;
  desc?: string;
  id: string;
}

const ActiveTask = ({
  activeTask,
  finishTask,
}: {
  activeTask: Tasks;
  finishTask: (id: string) => void;
}) => {
  const [successTask, setSuccessTask] = useState<boolean>(false);

  const onConclude = (id: string) => {
    setSuccessTask(true);
    finishTask(id);
  };

  return (
    <BottomSheetContainer style={styles.panel}>
      <Text style={styles.panelTitle}>{activeTask?.title}</Text>
      <Text style={styles.panelSubtitle}>{activeTask?.desc}</Text>

      {successTask && (
        <LottieView
          source={require('../lottiefiles/success.json')}
          autoPlay
          loop
        />
      )}
      <Spacer />
      <Button
        style={styles.modalButton}
        onPress={() => onConclude(activeTask?.id as string)}>
        <ButtonText>Concluir</ButtonText>
      </Button>
    </BottomSheetContainer>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    width: width - 32,
    alignSelf: 'flex-start',
  },
  panel: {
    height: height * 0.8,
    padding: 16,
  },
  panelTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  panelSubtitle: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 8,
    textAlign: 'left',
  },
});

export default ActiveTask;
