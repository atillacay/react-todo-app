import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'

function FilterTodo() {

    const [ todoData, setTodoData ] = useContext(TodoContext)

    const allTodos = todoData.length;
    const activeTodo = todoData.filter((todo) => todo.isDone === false).length
    const doneTodo = todoData.filter((todo) => todo.isDone === true).length








    return (
        <div className="filter-btn" >
            <button>All: {allTodos}</button>
            <button>Active: {activeTodo}</button>
            <button>Completed: {doneTodo}</button>
        </div>
    )
}

export default FilterTodo
