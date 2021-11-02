import { useState, createContext, useEffect } from "react";

const data = [
    {
        id: 1,
        todo: "item 1",
        isDone: true
    },
    {
        id: 2,
        todo: "item 2",
        isDone: false
    },
    {
        id: 3,
        todo: "item 3",
        isDone: false
    }
]


export const TodoContext = createContext();

const TodoDataProvider = (props) => {

    const [ todoData, setTodoData ] = useState([ ...data ])

    return (
        <TodoContext.Provider value={[ todoData, setTodoData ]}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoDataProvider