import React from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

class MyTodoList extends React.Component {

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

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
  };
};

export default connect(mapStateToProps)(MyTodoList);

