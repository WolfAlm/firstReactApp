import React from 'react'
import './Task.css'
class Task extends React.Component {

    printTaskInfo = () => {
        var id = this.props.id;
        var status = !this.props.completed;
        this.props.updateStatus(id, status);
    }

    render() {
        return (
            <div className="container">
                <header>
                        <div className='id'>{this.props.id}</div>
                        <div className='name'>{this.props.name}</div>
                </header>
                <section>
                    <div className='description'>{this.props.description}</div>
                </section>
                <footer>
                    <div className='status'> Status: {this.props.completed ? 'completed' : 'not completed'}</div>
                    <button onClick={this.printTaskInfo}>Done!</button>
                </footer>
            </div>
        )
    }

}

export default Task;