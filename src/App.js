import { useState } from "react";
import "./App.css";

function App() {
    const [newTask, setNewTask] = useState()
    const [todos, setTodos] = useState([
        {id: 1, task: "Task 1"},
        {id: 2, task: "Task 2"}
    ])

    //track changes on <input>
    const handleOnChange = (e) => {
        setNewTask(e.target.value)
    }

    //add task to todos
    const addOnClick = () => {
        const id = todos[todos.length - 1].id + 1
        const todo = {
            id: id,
            task: newTask
        }
        setTodos([...todos, todo])
    }


    return (
        <div className="app">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input type="text" placeholder="Add a new task..." onChange={handleOnChange}/>
                <button onClick={addOnClick}>Add</button>
            </div>
            
            <ul className="todo-list">
                {todos.map(todo => (
                    <li className="">
                        {todo.id}. {todo.task}
                        <div className="button-group">
                            <button className="complete-button">Complete</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
 );
}

export default App;
