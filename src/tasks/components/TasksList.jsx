import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from '../../tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };
  //показать задачи, когда компонента отрисовалась - запрос за всеми тасками
  componentDidMount() {
    this.fetchTasks();
  }

  //0* ======ф-я делает запрос на сервер и потом эти задачи устанавливает в state
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
              {...elem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;

//3* ======================handleTaskDelete
//1. filter tasks и оставить все, кроме удаляемого
//2. обновить состояние
// const updatedTasks = this.state.tasks.filter(elem => elem.id !== id);
// this.setState({ tasks: updatedTasks });

//1* =========================onCreate
//1. Создать задачу(обьект)
//2. запостить задачу на сервер
//3. извлечь (fetch) лист с сервера
// const { tasks } = this.state;

//2*  ====================== handleTaskStatusChange - обновление
//1. найти задачу в состоянии по id
//2. создать updated task (update: создам тот же обьект с и переключить value в done)
//3. обновить задачу на сервере  (PUT)
//4. извлечь (fetch) обновленный список задач (POST)

//==========================data===========================
//       { text: 'Buy milk', done: false, id: 1 },
//       { text: 'Pick up Tom from airport', done: false, id: 2 },
//       { text: 'Visit party', done: false, id: 3 },
//       { text: 'Visit doctor', done: true, id: 4 },
//       { text: 'Buy meat', done: true, id: 5 },

// done={elem.done}
// text={elem.text}
