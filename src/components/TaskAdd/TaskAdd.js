import React from 'react'

class TaskAdd extends React.Component {
    state = {
        count: 0
    }

    giveNumber = () => {
        this.setState(currentState => ({
            count: currentState.count + 1
        }))

        this.createTask();
    }

    createTask() {
        var tasks = this.props.tasks;
        var newTask = {
            id: this.state.count + 1,
            name: document.getElementById("nameInput").value,
            description: document.getElementById("nameDescription").value,
            completed: false
        }

        tasks.push(newTask);
        this.props.updateData(tasks);
        document.getElementById("nameInput").value = "";
        document.getElementById("nameDescription").value = "";
    }

    render() {
        return (
            <div>
                <div>Всего задач: {this.state.count}</div>
                <label>
                    Введите название задачи: <input type = "text" id="nameInput"/>
                </label>
                <br/>
                <label>
                    Введите описание задачи: <input type = "text" id="nameDescription"/>
                </label>
                <br/>
                <input type="submit" value="Создать" onClick={this.giveNumber}/>
            </div>
        )
    }
}

export default TaskAdd;