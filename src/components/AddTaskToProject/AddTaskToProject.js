import React from "react";
import { connect } from "react-redux";
import { addTaskToProject } from "../../redux/actions/projectActions";

import styles from "./AddTaskToProject.module.css";

class AddTaskToProject extends React.Component {
  state = {
    name: "",
    description: "",
  };

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  changeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.description === "") {
      return;
    }
    const { projects, projectId } = this.props;
    let maxTaskIdInProject = 0;
    let index = projects.findIndex((project) => project.id === projectId);
    if (index === -1) {
      return;
    }
    projects[index].tasks.forEach((task) => {
      if (task.id > maxTaskIdInProject) {
        maxTaskIdInProject = task.id;
      }
    });

    this.props.addTaskToProject(this.props.projectId, {
      id: maxTaskIdInProject + 1,
      name: this.state.name,
      description: this.state.description,
      completed: false,
    });
    this.setState({ name: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.addTaskToProject}>
        <label>
          Название задачи:{" "}
          <input
            type="text"
            onChange={this.changeName}
            value={this.state.name}
          />
        </label>
        <br />
        <label>
          Описание задачи:{" "}
          <input
            type="text"
            onChange={this.changeDescription}
            value={this.state.description}
          />
        </label>
        <br />
        <input className={styles.reset_btn} type="reset" value="Очистить" />
        <input className={styles.add_btn} type="submit" value="Добавить" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskToProject: (projectId, task) =>
      dispatch(addTaskToProject(projectId, task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskToProject);
