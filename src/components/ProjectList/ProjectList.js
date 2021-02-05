import React from "react";
import { connect } from "react-redux";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import AddProject from "../AddProject/AddProject";

import styles from "./ProjectList.module.css";

class ProjectList extends React.Component {
  render() {
    const list = this.props.projects.map((project) => {
      return <ProjectListItem key={project.id} project={project} />;
    });

    return (
      <>
        <h1 className={styles.title}>Список проектов</h1>
        <AddProject />
        <ul className={styles.list}>
          {list.length ? list : "Список проектов пуст"}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.projects,
  };
};

export default connect(mapStateToProps)(ProjectList);
