import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CalendarView from './components/CalendarView';
// import { scheduleNotification } from './components/notifications';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    scheduleNotification(task);
  };

  return (
    <div>
      <h1>Task Reminder App</h1>
      <TaskForm addTask={addTask} />
      <CalendarView tasks={tasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
