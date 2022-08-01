import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' }); //пустая строка в input
  };

  render() {
    return (
      <div className="create-task">
        <input
          onChange={this.handleChange}
          className="create-task__input"
          type="text"
          value={this.state.value}
        />
        <button onClick={this.handleTaskCreate} className="btn create-task__btn">
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

//1. взять текст из инпута
//2. создать задачу с этим текстом
//3. добавить сформированный обькет/задачу в весь список
