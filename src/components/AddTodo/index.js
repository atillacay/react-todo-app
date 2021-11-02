import React, { useContext, useRef, useEffect } from 'react'
import { TodoContext } from '../../TodoContext'

function AddTodo() {

    const [ todoData, setTodoData ] = useContext(TodoContext)

    const inputElement = useRef(null)

    const add = (e) => {

        let randNum = Math.floor(Math.random() * 3)

        if (e.key === "Enter") {
            setTodoData(
                [ ...todoData,
                {
                    userId: randNum,
                    id: todoData.length + 1,
                    title: e.target.value,
                    completed: false
                }
                ])
        }
    }
    useEffect(() => {
        inputElement.current.value = ""
    }, [ todoData ])

    return (
        <div className="add-todo">
            <input ref={inputElement} type="text" onKeyPress={add} placeholder="Add Todo" />
        </div>
    )
}

export default AddTodo
