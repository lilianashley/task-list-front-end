import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  const updatedTask = {
    id: props.id,
    name: props.title,
    isComplete: !props.isComplete,
  };
  props.onUpdate(updatedTask);

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => props.onUpdate(props.id)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Task;
