import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if (task.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name: task,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTask('');
  };

  const deleteTask = (id) => {

    setTasks(
      tasks.filter(item => item.id !== id)
    );

  };

  const completeTask = (id) => {

    setTasks(
      tasks.map(item =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );

  };

  const renderTask = ({ item }) => {

    return (

      <View style={styles.taskContainer}>

        <TouchableOpacity
          style={styles.taskTextContainer}
          onPress={() => completeTask(item.id)}
        >

          <Text
            style={[
              styles.taskText,
              item.completed && styles.completedText
            ]}
          >
            {item.name}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(item.id)}
        >

          <Text style={styles.deleteText}>
            Delete
          </Text>

        </TouchableOpacity>

      </View>

    );
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        My To-Do List
      </Text>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >

          <Text style={styles.addButtonText}>
            Add Task
          </Text>

        </TouchableOpacity>

      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No tasks yet. Add your first task.
          </Text>
        }
      />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16
  },

  addButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 10
  },

  addButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  taskContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  taskTextContainer: {
    flex: 1
  },

  taskText: {
    fontSize: 18
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888'
  },

  deleteButton: {
    backgroundColor: '#e53935',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10
  },

  deleteText: {
    color: 'white',
    fontWeight: 'bold'
  },

  emptyText: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 30,
    fontSize: 16
  }

});
