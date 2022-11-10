import React from "react";
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = (props) => {

  let url = props.link

  return (
    <div className="todoitem">
      <div className={props.complete ? 'complete' : "notcomplete" + "container"}>
        <img className="displayImg" src={props.img}/>
        <p className="itemTitle">{props.text}</p>
        <h3>${props.price}</h3>
        <h4>{props.note}</h4>
      <ButtonGroup size="small" variant="text" >
        <Button startIcon={<CheckBoxIcon/>} onClick={() => props.handleComplete(props.id)}></Button>
        <Button startIcon={<OpenInNewIcon/>} onClick={() => {window.open(url, '_blank')}}></Button>
        <Button startIcon={<DeleteIcon/>} onClick={() => props.handleDelete(props.id)}></Button>
      </ButtonGroup>
      </div>
    </div>
  );
};

export default TodoItem;

{/* <button onClick={() => {window.open(url, '_blank')}}><AiOutlineLink/></button>
        <button onClick={() => props.handleDelete(props.id)}><MdDeleteOutline/></button>
        <button onClick={() => props.handleComplete(props.id)}><AiOutlineCheckCircle /></button> */}