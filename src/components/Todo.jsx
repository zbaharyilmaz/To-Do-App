import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";
import star1 from "../assets/star1.png";

const Todo = () => {
  return (
    <div>
      <h2 className="todo-head">
        TO DO LIST
        <span>
          <img className="todo-icon" src={star1} alt="" />
        </span> 
      </h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
