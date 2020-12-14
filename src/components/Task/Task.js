import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../../redux/actions/taskActions";
import styles from "./Task.module.scss";
import classnames from "classnames/bind";

const cs = classnames.bind(styles);

class Task extends React.Component {
  render() {
    return (
      <div className={cs("container", { ["container:hover"]: true })}>
        <header>
          <div className={cs("id")}>{this.props.id}</div>
          <div className={cs("name")}>{this.props.name}</div>
        </header>
        <section>
          <div className={cs("description")}>{this.props.description}</div>
        </section>
        <footer>
          <div className={cs("status")}>
            {" "}
            Status: {this.props.completed ? "completed" : "not completed"}
          </div>
          <button onClick={() => this.props.updateStatus(this.props.id)}>
            Done!
          </button>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus: (id) => dispatch(updateStatus(id)),
  };
};

export default connect(null, mapDispatchToProps)(Task);