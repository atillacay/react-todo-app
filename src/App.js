import React from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoDataProvider from './TodoContext';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <TodoDataProvider>
          <AddTodo />
          <TodoList />
        </TodoDataProvider>
      </div>
    </div>
  );
}

export default App;
