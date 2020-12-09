import React from "react";
import { connect } from "react-redux";

import { addProject } from "../../redux/actions/projectActions";
import styles from "./AddProject.module.css";

class AddProject extends React.Component {
  state = {
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
    if (this.state.nameInput == "" || this.state.nameDescription == "") {
      return;
    }
    // максимальный id среди проектов, чтобы при создании не было
    // повторений id
    let maxIdInProjects = 0;
    this.props.projects.forEach((project) => {
      if (project.id > maxIdInProjects) {
        maxIdInProjects = project.id;
      }
    });

    this.props.addProject({
      id: maxIdInProjects + 1,
      name: this.state.nameInput,
      description: this.state.nameDescription,
      tasks: [],
    });

    this.setState({ nameInput: "", nameDescription: "" });
  };

  render() {
    return (
      <div className={styles.addProject}>
        <div className={styles.projects_count}>
          Всего проектов: {this.props.projects.length}
        </div>
        <form className={styles.form}>
          <label>
            Введите название проекта:{" "}
            <input
              type="text"
              id="nameInput"
              onChange={this.changeName}
              value={this.state.nameInput}
            />
          </label>
          <br />
          <label>
            Введите описание проекта:{" "}
            <input
              type="text"
              id="nameDescription"
              onChange={this.changeDescription}
              value={this.state.nameDescription}
            />
          </label>
          <br />
          <input
            className={styles.create_btn}
            type="button"
            value="Создать"
            onClick={this.createTask}
          />
        </form>
      </div>
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
    addProject: (project) => dispatch(addProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
