import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ handleTaskStatusChange, handleTaskDelete, id, done, text }) => {
    return (
        <li className={classNames('list-item', { 'list-item_done': done })}>
            <input
                className="list-item__checkbox"
                type="checkbox"
                defaultChecked={done}
                onChange={() => handleTaskStatusChange(id)}
            />
            <span className="list-item__text">{text}</span>
            <button className="list-item__delete-btn" onClick={() => handleTaskDelete(id)}></button>
        </li>
    );
};

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool,
    text: PropTypes.string,
    handleTaskStatusChange: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
    text: '',
    done: null,
};

export default Task;



/**
import React from 'react';
import classNames from 'classnames';

const Task = ({ done, text, id, onChange, onDelete }) => {
  //const listItemClasses = classNames('list-item', { 'list-item_done': done });

  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button onClick={() => onDelete(id)} className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
*/
