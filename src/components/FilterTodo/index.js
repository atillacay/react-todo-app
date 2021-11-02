import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../../TodoContext'

function FilterTodo(props) {

    const [ todoData, setTodoData ] = useContext(TodoContext)

    const allTodos = todoData.length;
    const activeTodo = todoData.filter((todo) => todo.completed === false).length
    const doneTodo = todoData.filter((todo) => todo.completed === true).length

    const clearCompleted = () => {
        const promtResponse = prompt('Please type in "Delete"')

        if (promtResponse !== "Delete") {
            alert('Please type in "Delete" to delete completed items')
        }
        const completedTodos = todoData.filter((todo) => todo.completed !== true)

        setTodoData(completedTodos)

        alert(`Congrats!, ${completedTodos.length} todos cleared`)
    }


    return (
        <div className="filter-btn" >
            <button onClick={props.filter}>All: {allTodos}</button>
            <button onClick={() => { props.filter(true) }}>Active: {activeTodo}</button>
            <button onClick={() => { props.filter(false) }}>Completed: {doneTodo}</button>
            <button onClick={clearCompleted}>Clear All Completed</button>
        </div>
    )
}

export default FilterTodo
