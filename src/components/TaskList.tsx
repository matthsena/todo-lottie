import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Text } from './Text';

const { width } = Dimensions.get('window');

const Item = ({
  title,
  desc,
  id,
  onOpenTask,
}: {
  title: string;
  desc?: string;
  id: string;
  onOpenTask: (id: string) => void;
}) => (
  <TouchableOpacity key={id} style={styles.item} onPress={() => onOpenTask(id)}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{desc?.slice(0, 50)}...</Text>
  </TouchableOpacity>
);

const TaskList = ({
  title,
  desc,
  id,
  onOpenTask,
}: {
  title: string;
  desc?: string;
  id: string;
  onOpenTask: (id: string) => void;
}) => {
  return <Item title={title} desc={desc} id={id} onOpenTask={onOpenTask} />;
};

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default TaskList;
