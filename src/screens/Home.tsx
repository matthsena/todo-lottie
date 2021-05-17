import React, { useRef, useState } from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  Container,
  Spacer,
  BottomSheetContainer,
} from '../components/Container';
import { Text } from '../components/Text';
import { RoundedButton, Button, ButtonText } from '../components/Button';
import LottieView from 'lottie-react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Input } from '../components/Input';

const { height, width } = Dimensions.get('window');

interface Tasks {
  title: string;
  desc?: string;
}

const Home = () => {
  const appearanceMode = useColorScheme();

  const sheetRef = useRef<any>(null);

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDesc, setTaskDesc] = useState<string>('');
  const [tasks, setTask] = useState<Tasks[]>([]);

  const Item = ({ title, desc }: { title: string; desc?: string }) => (
    <View style={styles.item}>
      <Text style={styles.title} key={desc}>
        {title}
      </Text>
    </View>
  );

  const renderItem = ({ title, desc }: { title: string; desc?: string }) => (
    <Item title={title} desc={desc} />
  );

  const onSave = () => {
    if (taskTitle && taskDesc) {
      setTask([
        ...tasks,
        {
          title: taskTitle,
          desc: taskDesc,
        },
      ]);

      setTaskTitle('');
      setTaskDesc('');

      sheetRef?.current?.snapTo(1);
    }
  };

  const renderContent = () => (
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
      <Button style={styles.modalButton} onPress={() => onSave()}>
        <ButtonText>Salvar</ButtonText>
      </Button>
    </BottomSheetContainer>
  );

  const renderHeader = () => (
    <BottomSheetContainer style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </BottomSheetContainer>
  );

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />

      {tasks.length ? (
        <FlatList
          data={tasks}
          renderItem={({ item }) =>
            renderItem({ title: item.title, desc: item.desc })
          }
          keyExtractor={item => item.title}
        />
      ) : (
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
      )}

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
  },
  header: {
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
    backgroundColor: '#00000050',
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
  item: {
    width: width,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 22,
  },
});

export default Home;
