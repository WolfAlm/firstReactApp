import React from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

class MyTodoList extends React.Component {
  // все, что в комментариях - вынесено в redux
  // это state - стал стейтом редукс
  /*
  state = {
    tasks: [],
  };

  // это стало action'ом redux
  updateStatus = (index, status) => {
    const newTasks = [...this.state.tasks];
    var findIndex = newTasks.findIndex(
      (currentValue) => currentValue.id === index
    );
    newTasks[findIndex] = { ...newTasks[findIndex], completed: status };
    this.setState({ tasks: newTasks });
  };

  // это стало action'ом redux
  addTask = (task) => {
    const newTasks = [...this.state.tasks, task];
    this.setState({ tasks: newTasks });
  };
  */

  render() {
    return (
      <div className="tasks-container">
        <TaskAdd />
        {/* вот тут уже map по массиву из стейта редукс */}
        {this.props.tasks.map((newTask, i) => (
          <Task
            key={i}
            id={newTask.id}
            name={newTask.name}
            description={newTask.description}
            completed={newTask.completed}
            updateStatus={this.updateStatus}
          />
        ))}
      </div>
    );
  }
}

// так делают, когда используют connect
// берем из store массив тасков он находится тут - state.taskReducer.tasks
// и передаем в props компонента через connect
const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
  };
};

// вот тут создается новый компонент, в пропсы которого
// попали таски
// теперь внутри компонента можно обратиться к массиву тасков как
// this.props.tasks
export default connect(mapStateToProps)(MyTodoList);

