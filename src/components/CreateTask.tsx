import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Spacer, BottomSheetContainer } from '../components/Container';
import { Text } from '../components/Text';
import { Button, ButtonText } from '../components/Button';
import { Input } from '../components/Input';

const { height, width } = Dimensions.get('window');

const CreateTask = ({
  onSave,
}: {
  onSave: (taskTitle: string, taskDesc: string) => void;
}) => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDesc, setTaskDesc] = useState<string>('');

  const onHandleSave = () => {
    onSave(taskTitle, taskDesc);

    setTaskTitle('');
    setTaskDesc('');
  };

  return (
    <BottomSheetContainer style={styles.panel}>
      <Text style={styles.panelTitle}>Adicionar nova tarefa</Text>
      <Text style={styles.panelSubtitle}>
        Crie e organize novas tarefas a serem realizadas
      </Text>
      <Input
        placeholder="Titulo da tarefa"
        maxLength={100}
        placeholderTextColor={'#141414'}
        onChangeText={setTaskTitle}
        value={taskTitle}
      />
      <Input
        placeholder="Descrição (Opcional)"
        multiline={true}
        numberOfLines={4}
        maxLength={500}
        placeholderTextColor={'#141414'}
        value={taskDesc}
        onChangeText={setTaskDesc}
      />
      <Spacer />
      <Button style={styles.modalButton} onPress={() => onHandleSave()}>
        <ButtonText>Salvar</ButtonText>
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
    textAlign: 'center',
  },
  panelSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 8,
    textAlign: 'center',
  },
});

export default CreateTask;
