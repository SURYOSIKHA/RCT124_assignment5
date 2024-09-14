import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {new Date(task.dueDate).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
