import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.js';
import './TaskList.css';

const TaskList = (props) => {
  return (
    <ul className="TaskList">
      {props.tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            isComplete={task.isComplete}
            onUpdate={props.onUpdateTasks}
          />
        );
      })}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
  onUpdateTasks: PropTypes.func.isRequired,
};

export default TaskList;
