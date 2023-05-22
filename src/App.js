import { useState } from "react";
import "./App.css";

function App() {
 const [todo, setTodo] = useState([
  { id: 1, task: "task-2" },
  { id: 2, task: "task-3" },
 ]);
 const [input, setInput] = useState("");

 function handleOnChange(event) {
  setInput(event.target.value);
 }

 function handleOnClick() {
  const todos = {
   id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
   task: input,
  };
  setTodo([...todo, todos]);
 }

 const handleOnDelete = (value) => {
  const deletedItem = todo.filter((filtered, index) => {
   return filtered.id !== value;
  });
  console.log(deletedItem);
  setTodo(deletedItem);
 };

 // ["task-6","task-7","task-8"]
 return (
  <div className="app">
   <h1>Todo List</h1>
   <div className="todo-input">
    <input
     type="text"
     placeholder="Add a new task..."
     onChange={handleOnChange}
    />
    <button onClick={handleOnClick}>Add</button>
   </div>
   <ul className="todo-list">
    {todo.map(function (value, index) {
     return (
      <li className="">
       {console.log(value)}
       {value.id}. {value.task}
       <div className="button-group">
        <button className="complete-button">Complete</button>
        <button
         className="delete-button"
         onClick={() => handleOnDelete(value.id)}>
         Delete
        </button>
       </div>
      </li>
     );
    })}
   </ul>
  </div>
 );
}

export default App;
