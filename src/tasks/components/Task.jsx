import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ handleTaskStatusChange, handleTaskDelete, id, done, text,}) => {

    return (
        <li className={classNames('list-item', { 'list-item_done': done })}>
            <input
                className="list-item__checkbox"
                type="checkbox"
                defaultChecked={done}
                onChange={() => handleTaskStatusChange(id)}
            />
            <span className="list-item__text">{text}</span>
            <button  className="list-item__delete-btn" onClick={() => handleTaskDelete(id)}></button>
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



export default Task;




