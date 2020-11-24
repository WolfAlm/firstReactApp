import React from 'react'
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";
import './MyTodoList.css'

class MyTodoList extends React.Component {
    state = { 
        tasks: [
        ]
    }

    updateStatus = (index, status) => {
        const newTasks = [...this.state.tasks];
        var findIndex = newTasks.findIndex(currentValue => currentValue.id === index);
        newTasks[findIndex] = {...newTasks[findIndex], completed: status};
        this.setState({tasks: newTasks});
    }

    addTask = task => {
        const newTasks = [...this.state.tasks, task];
        this.setState({tasks: newTasks})
    }

    render() {
        return (
            <div className="tasks-container">
                <TaskAdd tasks={this.addTask}/>
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