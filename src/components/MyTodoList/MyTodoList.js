import React from 'react'
import Task from "./Task";
import './MyTodoList.css'

class MyTodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 0,
                name: 'Заболеть',
                description: 'Не думать про корону',
                completed: true

            },
            {
                id: 1,
                name: 'Попросить у преподавателя продлить дедлайн',
                description: 'Постаратсья не упасть лицом в грязь и молиться на милость',
                completed: false
            },
            {
                id: 2,
                name: 'Обрадоваться и лечиться',
                description: 'Держать в голове все необходимые таблетки, их даты приема',
                completed: false
            },
            {
                id: 3,
                name: 'Случайно потерять счет времени',
                description: 'И доделывать проект за последний час до дедлайна...',
                completed: true
            },
            {
                id: 4,
                name: 'ЛИТЬ В ГИТХАБ',
                description: 'НЕ ЗАБУДЬ ПРО РИДМИ',
                completed: false
            },
        ]
    }

    render() {
        return (
            <div className="tasks-container">
                {
                    this.state.tasks.map((newTask, i) => 
                    <Task 
                    key ={i}
                    id={newTask.id} 
                    name={newTask.name} 
                    description={newTask.description} 
                    completed={newTask.completed}/>
                )
                }
            </div>
        )
    }
}

export default MyTodoList