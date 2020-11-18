import React from 'react'

class TaskAdd extends React.Component {
    state = {
        count: 0,
        nameInput: "",
        nameDescription: ""
    }

    changeName = event => {
        this.setState({nameInput: event.target.value})
    }

    changeDescription = event => {
        this.setState({nameDescription: event.target.value})
    }

    createTask = () => {
        this.setState(currentState => ({
            count: currentState.count + 1
        }));

        this.props.tasks({
            id: this.state.count + 1,
            name: this.state.nameInput,
            description: this.state.nameDescription,
            completed: false
        });

        this.setState({nameInput: "", nameDescription: ""});
    }

    render() {
        return (
            <div>
                <div>Всего задач: {this.state.count}</div>
                <form>
                    <label>
                        Введите название задачи: <input type = "text" id="nameInput" onChange={this.changeName}/>
                    </label>
                    <br/>
                    <label>
                        Введите описание задачи: <input type = "text" id="nameDescription" onChange={this.changeDescription}/>
                    </label>
                    <br/>
                    <input type="reset" value="Создать" onClick={this.createTask}/>
                </form>
            </div>
        )
    }
}

export default TaskAdd;