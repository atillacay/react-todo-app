import React, { useContext, useEffect, useState } from 'react'
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
    const [ todos, setTodos ] = useState(todoData)

    const delTodo = (id) => {
        setTodoData(
            todoData.filter((item) => item.id !== id)
        )
    }
    const toggleStatus = (id) => {
        const tempState = [ ...todoData ]
        tempState.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
        })
        setTodoData(tempState)
    }

    const showFiltered = (status) => {
        const filtered = [ ...todoData ]
        setTodos(filtered.filter((filteredTodo) => filteredTodo.completed !== status))
    }

    useEffect(() => {
        setTodos(todoData)
    }, [ todoData ])

    return (
        <div className="list-container">
            <FilterTodo filter={showFiltered} />
            <ul>
                {todos.map((item) =>
                    <div key={item.id} className={`todo-list ${item.completed ? "item-done" : null}`}>
                        <li onClick={() => { toggleStatus(item.id) }}>
                            <span>{item.completed ? checkIcon : circleIcon}</span>
                            <span className="todo-text">{item.title}</span>
                        </li>
                        <span onClick={() => { delTodo(item.id) }}>{trashIcon}</span>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default TodoList
