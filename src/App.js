import "./App.css";

function App() {
 return (
  <div className="app">
   <h1>Todo List</h1>
   <div className="todo-input">
    <input type="text" placeholder="Add a new task..." />
    <button>Add</button>
   </div>
   <ul className="todo-list">
    <li className="">
     Task-1
     <div className="button-group">
      <button className="complete-button">Complete</button>
      <button className="delete-button">Delete</button>
     </div>
    </li>

    <li className="completed">
     Task-2
     <div className="button-group">
      <button className="complete-button">Complete</button>
      <button className="delete-button">Delete</button>
     </div>
    </li>
   </ul>
  </div>
 );
}

export default App;
