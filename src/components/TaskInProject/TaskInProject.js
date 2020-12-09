import React from "react";
import { connect } from "react-redux";
import {
  removeTaskFromProject,
  changeTaskStatus,
} from "../../redux/actions/projectActions";

import styles from "./TaskInProject.module.css";

class TaskInProject extends React.Component {
  deleteHandler = () => {
    this.props.removeTaskFromProject(this.props.projectId, this.props.task.id);
  };
  setTaskStatusAsDone = () => {
    const { projectId, task } = this.props;
    this.props.changeTaskStatus(projectId, task.id, true);
  };
  setTaskStatusAsUndone = () => {
    const { projectId, task } = this.props;
    this.props.changeTaskStatus(projectId, task.id, false);
  };

  render() {
    const { task } = this.props;
    return (
      <li className={styles.taskInProject}>
        <h3>Название задачи: {task.name}</h3>
        <div>Описание задачи: {task.description}</div>
        <div>
          Статус задачи: {task.completed ? "Выполнено" : "Не выполнено"}
          <div>
            <button
              className={styles.status_btn}
              onClick={
                task.completed
                  ? this.setTaskStatusAsUndone
                  : this.setTaskStatusAsDone
              }
            >
              Отметить как {task.completed ? "не выполнено" : "выполнено"}
            </button>
          </div>
        </div>
        <div>
          <button onClick={this.deleteHandler} className={styles.remove_btn}>
            Удалить задачу
          </button>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTaskFromProject: (projectId, taskId) =>
      dispatch(removeTaskFromProject(projectId, taskId)),
    changeTaskStatus: (projectId, taskId, status) =>
      dispatch(changeTaskStatus(projectId, taskId, status)),
  };
};

export default connect(null, mapDispatchToProps)(TaskInProject);
