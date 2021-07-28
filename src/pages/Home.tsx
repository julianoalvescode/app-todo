import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      setTasks((oldState) => [
        ...oldState,
        {
          title: newTaskTitle,
          id: Math.floor(Math.random() * 1000),
          done: false,
        },
      ]);
    }
  }

  function handleToggleTaskDone(id: number) {
    const newTasks = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((item) => item.id !== id);

    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
