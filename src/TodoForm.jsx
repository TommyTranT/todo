import React, { useState } from "react";
import TextField from '@mui/material/TextField'


const TodoForm = (props) => {
  const [textTodo, setTextTodo] = useState();
  const [noteTodo, setNoteTodo] = useState();
  const [priceTodo, setPriceTodo] = useState();
  const [imgTodo, setImgTodo] = useState();
  const [linkTodo, setLinkTodo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(textTodo, noteTodo, priceTodo, imgTodo, linkTodo);
  };

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit} className="inputBar">
  
        <TextField onChange={(e) => setTextTodo(e.target.value)} label="Name"/>
        <br />
        
        <TextField onChange={(e) => setNoteTodo(e.target.value)} label="Notes"/>
        <br />
        
        <TextField onChange={(e) => setPriceTodo(e.target.value)} label="Price" />
        <br />
        
        <TextField onChange={(e) => setImgTodo(e.target.value)} label="Img URL"/>
        <br />
        
        <TextField onChange={(e) => setLinkTodo(e.target.value)} label="Direct Link"/>
        <br />
        <button className="btn1" >Add Your Item!</button>
      </form>
    </div>
  );
};

export default TodoForm;

// Notes
// on change from the input, we store the value to setTextTodo state
