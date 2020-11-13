import React from 'react'
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

class MyTodoList extends React.Component {
    state = { 
        tasks: [
        ]
    }

    updateData = (value) => {
        this.setState({tasks: value})
    }

    updateStatus = (index, status) => {
        var findIndex = this.state.tasks.findIndex(currentValue => currentValue.id == index);
        this.state.tasks[findIndex].completed = status;
        this.setState(this.state.tasks);
    }

    render() {
        return (
            <div className="tasks-container">
                <TaskAdd tasks={this.state.tasks} updateData={this.updateData}/>
                {
                    this.state.tasks.map((newTask, i) => 
                    <Task 
                    key={i}
                    id={newTask.id} 
                    name={newTask.name} 
                    description={newTask.description} 
                    completed={newTask.completed} 
                    updateStatus={this.updateStatus}/>
                )
                }
            </div>
        )
    }
}

export default MyTodoList