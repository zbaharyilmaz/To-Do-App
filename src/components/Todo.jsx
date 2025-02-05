import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";
// import todolisticon from "../assets/todolisticon.png";

const Todo = () => {
  return (
    <div>
      <h2 className="todo-head">
        TO DO LIST
        {/* <span>
          <img className="todo-icon" src={todolisticon} alt="" />
        </span> */}
      </h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
