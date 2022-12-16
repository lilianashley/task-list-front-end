import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';


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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} />}</div>
      </main>
    </div>
  );
};

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
