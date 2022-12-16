import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';


const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

function App() {
  const [taskData, setTaskData] = useState(TASKS);
  const updateTaskData = (taskId) => {
    const newTaskData = [...taskData];
    for (const task of newTaskData) {
      if (task.id === taskId) {
        task.isComplete = true;
      } else {
        return task;
      }
    }
    setTaskData(newTaskData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={taskData} onUpdateTasks={updateTaskData} />
        </div>
      </main>
    </div>
  );
}

export default App;

/*toggle #1* #1 toggle complete* -lily*/
const ToDo = ({todo}) => {
  return (
      <div className={todo.complete ? "strike" : ""}>
          {todo.task}
      </div>
  );
};
/* added this L*/
const handleToggle = (id) => {
  let mapped = TaskList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  });
  TaskList(mapped);
}

const handleFilter = () => {
  let filtered = TaskList.filter(task => {
    return !task.complete;
  });
  TaskList(filtered);
}
