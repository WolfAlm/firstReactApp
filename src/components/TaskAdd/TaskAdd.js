import React from "react";
import { connect } from "react-redux";

import { addTask } from "../../redux/actions/taskActions";

class TaskAdd extends React.Component {
  state = {
    count: 0,
    nameInput: "",
    nameDescription: "",
  };

  changeName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  changeDescription = (event) => {
    this.setState({ nameDescription: event.target.value });
  };

  createTask = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }));

    // добавление таски редукс экшеном
    this.props.addTask({
      id: this.state.count + 1,
      name: this.state.nameInput,
      description: this.state.nameDescription,
      completed: false,
    });

    this.setState({ nameInput: "", nameDescription: "" });
  };

  render() {
    return (
      <div>
        <div>Всего задач: {this.state.count}</div>
        <form>
          <label>
            Введите название задачи:{" "}
            <input type="text" id="nameInput" onChange={this.changeName} />
          </label>
          <br />
          <label>
            Введите описание задачи:{" "}
            <input
              type="text"
              id="nameDescription"
              onChange={this.changeDescription}
            />
          </label>
          <br />
          <input type="reset" value="Создать" onClick={this.createTask} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(TaskAdd);