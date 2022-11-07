import React, { useState } from "react";
import {CgImage} from 'react-icons/cg'
import {AiOutlineLink} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {MdDescription} from 'react-icons/md'
import {MdDriveFileRenameOutline} from 'react-icons/md'

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
        <label><MdDriveFileRenameOutline/></label>
        <input onChange={(e) => setTextTodo(e.target.value)} placeholder="Name"/>
        <br />
        <label><MdDescription/></label>
        <input onChange={(e) => setNoteTodo(e.target.value)} placeholder="Notes"/>
        <br />
        <label><RiMoneyDollarCircleFill/></label>
        <input onChange={(e) => setPriceTodo(e.target.value)} placeholder="Price"/>
        <br />
        <label><CgImage/></label>
        <input onChange={(e) => setImgTodo(e.target.value)} placeholder="Img URL"/>
        <br />
        <label><AiOutlineLink/></label>
        <input onChange={(e) => setLinkTodo(e.target.value)} placeholder="Direct Link"/>
        <br />
        <button className="btn1">Add Your Item!</button>
      </form>
    </div>
  );
};

export default TodoForm;

// Notes
// on change from the input, we store the value to setTextTodo state
