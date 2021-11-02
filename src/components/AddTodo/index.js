import React, { useState, useContext, useRef } from 'react'
import { TodoContext } from '../../TodoContext'

function AddTodo() {

    const [ todoData, setTodoData ] = useContext(TodoContext)
    const [ localstate ] = useState()
    const inputElement = useRef(null)

    const add = (e) => {

        if (e.key === "Enter") {
            setTodoData(
                [ ...todoData,
                {
                    id: todoData.length + 1,
                    todo: e.target.value,
                    isDone: false
                }
                ])
        }
    }
    return (
        <div className="add-todo">
            <input ref={inputElement} type="text" value={localstate} onKeyPress={add} placeholder="Add Todo" />
        </div>
    )
}

export default AddTodo
