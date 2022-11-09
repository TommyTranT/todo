import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./App.css";
import { useState } from "react";
// import { MdTitle } from "react-icons/md";
import titlepng from './title.png';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Home';


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
    <Router>

      <img className="imgTitle" src={titlepng}/>
              <div className="homelink">    
              <Link to="/home">Home</Link>
              </div>
              <div className="createlink">  
              <Link to="/" >Create Wishlist</Link>
              </div>
            <Switch>
              <Route path='/home'>
              <Home />
              </Route>
              <Route path='/'>


                
    <div className="cont1" >
      <div className="cont2">
        <div className="App">
          <div className="form">

            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
            <div className="cont3">
            <div className="itemForm">
              {elements}
            </div>
          </div>
    </div>
              </Route>
            </Switch>
    </Router>
  );
}

export default App;

