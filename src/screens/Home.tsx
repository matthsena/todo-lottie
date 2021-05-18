import React, { useRef, useState } from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import { Container, BottomSheetContainer } from '../components/Container';
import { Text } from '../components/Text';
import { RoundedButton } from '../components/Button';
import LottieView from 'lottie-react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import uuid from 'react-native-uuid';
import TaskList from '../components/TaskList';
import ActiveTask from '../components/ActiveTask';
import CreateTask from '../components/CreateTask';

const { height, width } = Dimensions.get('window');

interface Tasks {
  title: string;
  desc?: string;
  id: string;
}

const Home = () => {
  const appearanceMode = useColorScheme();

  const sheetRef = useRef<any>(null);
  const sheetTask = useRef<any>(null);

  const [tasks, setTask] = useState<Tasks[]>([]);
  const [activeTask, setActiveTask] = useState<Tasks>();

  const onOpenTask = (id: string) => {
    const current = tasks.filter(e => e.id === id);
    setActiveTask({ ...current[0] });
    sheetTask?.current?.snapTo(0);
  };

  const onSave = (taskTitle: string, taskDesc: string) => {
    if (taskTitle && taskDesc) {
      setTask([
        ...tasks,
        {
          title: taskTitle,
          desc: taskDesc,
          id: String(uuid.v4()),
        },
      ]);

      sheetRef?.current?.snapTo(1);
    }
  };

  const finishTask = (id: string) => {
    const items = tasks.filter(e => e.id !== id);

    setTask([...items]);
    setActiveTask({} as Tasks);
    sheetTask?.current?.snapTo(1);
  };

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
            TaskList({
              title: item.title,
              desc: item.desc,
              id: item.id,
              onOpenTask: onOpenTask,
            })
          }
          keyExtractor={item => item.id}
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
        renderContent={() => <CreateTask onSave={onSave} />}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={false}
      />

      <BottomSheet
        ref={sheetTask}
        snapPoints={[height * 0.8, 0]}
        renderContent={() => (
          <ActiveTask
            activeTask={activeTask as Tasks}
            finishTask={finishTask}
          />
        )}
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
});

export default Home;
