import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import AddTaskToProject from "../AddTaskToProject/AddTaskToProject";
import TaskInProject from "../TaskInProject/TaskInProject";

import styles from "./Project.module.css";

class Project extends React.Component {
  state = {
    showAddTaskForm: false,
  };

  showForm = () => {
    this.setState({ showAddTaskForm: true });
  };
  hideForm = () => {
    this.setState({ showAddTaskForm: false });
  };

  render() {
    let { projects } = this.props;
    const { id } = this.props.match.params;
    const projectId = Number(id);
    const project = projects.find((project) => project.id === projectId);

    // если проекта с таким id не существует - редирект на главную
    if (project === undefined) {
      return <Redirect to="/" />;
    }

    const taskList =
      project.tasks &&
      project.tasks.map((task) => {
        return (
          <TaskInProject key={task.id} task={task} projectId={project.id} />
        );
      });

    return (
      <div className={styles.project}>
        <Link to="/">На главную</Link>
        <h2 className={styles.title}>Название проекта: {project.name}</h2>
        <p className={styles.description}>
          Описание проекта: {project.description}
        </p>
        <p className={styles.task_count}>
          Всего задач в проекте: {project.tasks.length}
        </p>
        <button
          onClick={this.state.showAddTaskForm ? this.hideForm : this.showForm}
          className={styles.showhide_btn}
        >
          {this.state.showAddTaskForm
            ? "Закрыть форму"
            : "Добавить задачи в проект"}
        </button>
        {this.state.showAddTaskForm ? (
          <AddTaskToProject projectId={project.id} />
        ) : null}
        <ul className={styles.list}>
          {taskList.length ? taskList : "Пока нет задач"}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.projects,
  };
};

export default connect(mapStateToProps)(Project);
