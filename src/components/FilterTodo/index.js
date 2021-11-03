import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'

function FilterTodo(props) {
    const [ todoData, setTodoData ] = useContext(TodoContext)
    const allTodos = todoData.length;
    const activeTodo = todoData.filter((todo) => todo.completed === false).length
    const doneTodo = todoData.filter((todo) => todo.completed === true).length

    const clearCompleted = () => {
        if (activeTodo === 0) {
            alert('Nothing to delete!')
        } else {
            const promtResponse = prompt('Please type in "Delete"')

            if (promtResponse !== "Delete") {
                alert('Please type in "Delete" to delete completed items')
            }
        }
        const completedTodos = todoData.filter((todo) => todo.completed !== true)
        setTodoData(completedTodos)
    }

    return (
        <div className="filter-btn" >
            <button onClick={props.filter}>All: {allTodos}</button>
            <button onClick={() => activeTodo > 0 ? props.filter(true) : ""}>Active: {activeTodo}</button>
            <button onClick={() => doneTodo > 0 ? props.filter(false) : ""}>Completed: {doneTodo}</button>
            <button onClick={clearCompleted}>Clear All Completed</button>
        </div>
    )
}

export default FilterTodo
