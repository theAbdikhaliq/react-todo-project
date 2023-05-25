import { useState } from "react";
import "./App.css";

function App() {
    const [newTask, setNewTask] = useState()
    const [todos, setTodos] = useState([
        {id: 1, task: 'Your first task.'}
    ])

    //track changes on <input>
    const handleOnChange = (e) => {
        setNewTask(e.target.value)
    }

    //add task to todos
    const addOnClick = () => {
        const id = todos.id === 0 ? 1 : todos[todos.length - 1].id + 1
        const todo = {
            id: id,
            task: newTask,
            completed: false
        }
        setTodos([...todos, todo])
    }

    //delete task
    const deleteOnClick = (id) => {
        const remainedTodos = todos.filter(todo => todo.id !== id)
        setTodos(remainedTodos)
    }

    //complete task
    const completeOnClick = (id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )))
    }


    return (
        <div className="app">
            <h1>Todo List</h1>
            <p style={{textAlign: 'right'}}>See on <a href="https://github.com/theAbdikhaliq/react-todo-project" target="_blank">Github</a></p>
            <div className="todo-input">
                <input type="text" placeholder="Add a new task..." onChange={handleOnChange}/>
                <button onClick={addOnClick}>Add</button>
            </div>
            
            <ul className="todo-list">
                {todos.map(todo => (
                    <li className={todo.completed ? "completed" : ""}>
                        {todo.id}. {todo.task}
                        <div className="button-group">
                            <button className="complete-button" onClick={() => completeOnClick(todo.id)}>Complete</button>
                            <button className="delete-button" onClick={() => deleteOnClick(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {/* <div style={{marginBottom: "5px"}}>helye</div>
            <footer style={{marginBottom: '5px'}}>Copyright</footer> */}
        </div>
 );
}

export default App;
