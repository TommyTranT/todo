import React from "react";
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'

const TodoItem = (props) => {

  let url = props.link

  return (
    <div className="todoitem">
      <div className={props.complete ? 'complete' : "notcomplete" + "container"}>
        <img className="displayImg" src={props.img}/>
        <h2>{props.text}</h2>
        <h3>${props.price}</h3>
        <h4>{props.note}</h4>
      <div className="buttonGroup">
        <button onClick={() => {window.open(url, '_blank')}}><AiOutlineLink/></button>
        <button onClick={() => props.handleDelete(props.id)}><MdDeleteOutline/></button>
        <button onClick={() => props.handleComplete(props.id)}><AiOutlineCheckCircle /></button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
