import React from 'react';
import TasksList from './TasksList.jsx';

import {connect} from "react-redux";
import * as tasksAction from "../tasks.actions";

const TodoList = () => {
  return (
    <>
      <h1 className="title">Todo list</h1>
      <TasksList />
    </>
  );
};

const mapDispatch={
    getTaskList:tasksAction.getTaskList
}

export default connect(null, mapDispatch)(TodoList);

//export default TodoList;
