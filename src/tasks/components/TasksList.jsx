import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { sortedTasksSelector } from '../tasks.selectors';

const TasksList = ({ tasks, getTasksList, updateTask, deleteTask, createTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            handleTaskStatusChange={updateTask}
            handleTaskDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    tasks: sortedTasksSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TasksList);

/**
import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from '../tasksGateway';
import {connect} from "react-redux";
import * as tasksAction from "../tasks.actions";
*/

/**class TasksList extends React.Component {
  state = {
    tasks: [],
  };
  //показываем задачи, когда компонента отрисовалась - запрос за всеми тасками
  componentDidMount() {
    this.fetchTasks();
  }

  //0* ========== ф-я делает запрос на сервер и потом эти задачи устанавливает в state
  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({ tasks: tasksList });
    });
  };

  //1*
  onMyCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  //2*
  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  //3*
  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks //сортировка массива
        .slice()
        .sort((a, b) => a.done - b.done);

    return (
        <div className="todo-list">
          <CreateTaskInput onCreate={this.onMyCreate} />
          <ul className="list">
            {sortedList.map(elem => (
                <Task
                    onDelete={this.handleTaskDelete}
                    onChange={this.handleTaskStatusChange}
                    key={elem.id}
                    {...elem} //!*
                />
            ))}
          </ul>
        </div>
    );
  }
}

export default TasksList;*/
