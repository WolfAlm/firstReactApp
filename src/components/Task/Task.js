import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../../redux/actions/taskActions";
import styles from "./Task.module.scss";
import classnames from "classnames/bind";

const cs = classnames.bind(styles);

class Task extends React.Component {
  /*
   * это уже не нужно, можно удалить
  printTaskInfo = () => {
    var id = this.props.id;
    var status = !this.props.completed;
    this.props.updateStatus(id, status);
  };
  */

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

// вот тут передаем экшены (action creator) в пропсы компонента
// через connect
// эти функции сразу диспатчатся
const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus: (id) => dispatch(updateStatus(id)),
  };
};

// передаем экшены (action creator) в пропсы компонента
// теперь внутри компонента можно обратиться к экшену как
// this.props.updateStatus
export default connect(null, mapDispatchToProps)(Task);

