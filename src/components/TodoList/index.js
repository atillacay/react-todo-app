import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import FilterTodo from '../FilterTodo'

function TodoList() {

    const circleIcon = <FontAwesomeIcon icon={faCircle} />
    const checkIcon = <FontAwesomeIcon icon={faCheck} />
    const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

    const [ todoData, setTodoData ] = useContext(TodoContext)

    const delTodo = (id) => {
        setTodoData(
            todoData.filter((item) => item.id !== id)
        )
    }
    const toggleStatus = (id) => {
        const tempState = [ ...todoData ]
        tempState.map((todo, index) => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
            }
        })
        setTodoData(tempState)
    }

    return (
        <div className="list-container">
            <ul>
                {todoData.map((item) =>
                    <div className={`todo-list ${item.isDone ? "item-done" : null}`}>
                        <li key={item.id} onClick={() => { toggleStatus(item.id) }}>
                            <span>{item.isDone ? checkIcon : circleIcon}</span>
                            <span className="todo-text">{item.todo}</span>
                        </li>
                        <span onClick={() => { delTodo(item.id) }}>{trashIcon}</span>
                    </div>
                )}
            </ul>
            <FilterTodo />
        </div>
    )
}

export default TodoList
