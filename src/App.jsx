import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./App.css";
import { useState } from "react";
import whiteFont from "./whiteFont.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Button from "@mui/material/Button";
import { width } from "@mui/system";

function App() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

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
    const newTodoes = todos.filter((el) => el.id !== id);

    setTodos(newTodoes, ...todos);
  };

  const handleComplete = (id) => {
    const updateTodos = todos.map((el) => {
      if (el.id === id) {
        el.complete = !el.complete;
      }
      return el;
    });

    setTodos(updateTodos);
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShow((prev) => !prev)
  }

  const elements = todos.map((el) => (
    <TodoItem
      text={el.text}
      note={el.note}
      price={el.price}
      img={el.img}
      link={el.link}
      id={el.id}
      key={el.key}
      todo={el}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      complete={el.complete}
    />
  ));

  console.log(todos);

  return (
    <Router>
      <div className="navbar">
        <Link to="/home">
          <img className="imgTitle" src={whiteFont} />
        </Link>

        <div className="createlink">
          <Link to="/">
            <button className="btn2">Get Started!</button>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <div className="cont1">
            <div className="cont2">
              <div className="App">
                <div className="form">
                  <Button
                    variant="contained"
                    onClick={handleShow}
                    className="showButton"
                  >
                    Add Item
                  </Button>
                  {show && <TodoForm addTodo={addTodo} />}
                </div>
              </div>
            </div>
            <div className="cont3">
              <div className="itemForm">{elements}</div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
