import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, welldone } from '../redux/actions/todoActions';
import done from '../assets/done.png';
import cross from '../assets/cross.png';
import "./TodoItem.css"

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item"
      style={{
        background: todo.completed ? "#ed7e3e" : "#7690f6",
        textDecoration: todo.completed ? "line-through" : "none",
        filter: todo.completed ? "blur(2px)" : "none",
        margin: "10px 0",
        borderRadius: "5px",
        color: "white",
        width: "100%",
      }}
    >
      <h2 className="todo-text">
        {todo.title}
      </h2>
      <div className="todo-actions">
        <span>
          <img src={done} className="ok-logo" alt="ok logo" 
          onClick={()=>dispatch(welldone(todo.id))}/>
        </span>
        <span>
          <img
            src={cross}
            className="delete-logo"
            alt="delete logo"
            onClick={() => dispatch(remove(todo.id))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
