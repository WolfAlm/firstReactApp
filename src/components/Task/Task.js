import React from 'react'
import styles from './Task.module.scss'
import classnames from 'classnames/bind'

const cs = classnames.bind(styles)

class Task extends React.Component {

    printTaskInfo = () => {
        var id = this.props.id;
        var status = !this.props.completed;
        this.props.updateStatus(id, status);
    }

    render() {
        return (
            <div className={cs("container", {["container:hover"]: true})}>
                <header>
                        <div className={cs("id")}>{this.props.id}</div>
                        <div className={cs("name")}>{this.props.name}</div>
                </header>
                <section>
                    <div className={cs("description")}>{this.props.description}</div>
                </section>
                <footer>
                    <div className={cs("status")}> Status: {this.props.completed ? 'completed' : 'not completed'}</div>
                    <button onClick={this.printTaskInfo}>Done!</button>
                </footer>
            </div>
        )
    }

}

export default Task;