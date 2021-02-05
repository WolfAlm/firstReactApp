import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeProject } from "../../redux/actions/projectActions";

import styles from "./ProjectListItem.module.css";

class ProjectListItem extends React.Component {
  render() {
    return (
      <li className={styles.projectListItem}>
        <h2 className={styles.title}>{this.props.project.name}</h2>
        <p>Описание проекта: {this.props.project.description}</p>
        <p>
          Количество задач в проекте:{" "}
          {this.props.project.tasks && this.props.project.tasks.length}
        </p>
        <div className={styles.buttons}>
          <button
            onClick={() => this.props.removeProject(this.props.project.id)}
            className={styles.remove_btn}
          >
            Удалить
          </button>
          <Link
            to={`/projects/${this.props.project.id}`}
            className={styles.link}
          >
            Подробнее
          </Link>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProject: (projectId) => dispatch(removeProject(projectId)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectListItem);
