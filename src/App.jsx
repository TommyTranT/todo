import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./App.css";
import { useState } from "react";
import { MdTitle } from "react-icons/md";
import titlepng from './title.png';
import { Routes, Route, Link } from "react-router-dom";




function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, note, price, img, link) => {

    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    const newTodo = {
      text: text,
      note: note,
      price: price,
      img: img,
      link: link,
      id: id,
      key: id,
      complete: false,
    };

    setTodos(() => [newTodo, ...todos]);
  };

  const handleDelete = (id) => {
    const newTodoes = todos.filter((el) => el.id !== id)

    setTodos(newTodoes, ...todos)
  }

  const handleComplete = (id) => {
    const updateTodos = todos.map((el) => {
      if (el.id === id) {
        el.complete = !el.complete
      }
      return el
    })

    setTodos(updateTodos)
  }

  const elements = todos.map((el) => (
  <TodoItem
    text = {el.text}
    note = {el.note}
    price = {el.price}
    img = {el.img}
    link = {el.link}
    id = {el.id}
    key = {el.key}
    todo = {el}
    handleDelete = {handleDelete}
    handleComplete = {handleComplete}
    complete = {el.complete}
  />
  ));

  console.log(todos);

  return (
    <div className="App">
      <div className="form">
      <img classname="imgTitle" src={titlepng}/>
      

          <TodoForm addTodo={addTodo} />
            <div className="itemForm">
              {elements}
            </div>
      </div>
    </div>
  );
}

export default App;

