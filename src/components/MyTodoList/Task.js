import React from 'react'
import './Task.css'
class Task extends React.Component {

    printTaskInfo = () => {
        console.log("Task " + this.props.id + " competed status = " + this.props.completed)
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