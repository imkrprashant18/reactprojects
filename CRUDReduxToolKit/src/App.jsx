import { useState } from "react";
import "./App.css";

function App() {
  const [isInput, setIsInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  // To display message for empty input
  const [IsMessage, setIsMessage] = useState("");
  // to edit the index of same item
  const [editIndex, setEditIndex] = useState(null);

  // add todo
  const handelTodoAdd = () => {
    if (isInput.trim() === "") {
      setIsMessage("Please Enter Valid Task");
      return; // if there is no return then Value will be return so be careful about it
    }
    if (isEdit) {
      setTodos((prevTodo) =>
        prevTodo.map((item, index) => (index === editIndex ? isInput : item))
      );
      setIsEdit(false);
    } else {
      setTodos([...todos, isInput]);
    }
    setIsInput("");
  };

  // to delete todo
  const handleDelete = (index) => {
    const isDeleteTodo = todos.filter((item, prev) => prev !== index);
    setTodos(isDeleteTodo);
  };
  // toDelete
  const handleEdit = (index) => {
    setIsInput(todos[index]);
    setIsEdit(true);
    setEditIndex(index);
    // console.log("Hello");
  };
  return (
    <>
      <h1>CRUD TODO</h1>
      <input
        type="text"
        value={isInput}
        onChange={(e) => {
          setIsInput(e.target.value);
          setIsMessage("");
        }}
        placeholder="Enter Your task"
      />
      <button onClick={handelTodoAdd}>{isEdit ? "Update" : "Add"}</button>
      {IsMessage && <p style={{ color: "red" }}>{IsMessage}</p>}
      {todos.map((item, index) => (
        <p key={index}>
          {item}
          <button onClick={() => handleDelete(index)}>X</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </p>
      ))}
    </>
  );
}

export default App;
