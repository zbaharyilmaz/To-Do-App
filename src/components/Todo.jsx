import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  return (
    <div>
        <h2 className="todo-head">TO DO LIST</h2>
        <TodoInput />
        <TodoList />
    </div>
  );
};

export default Todo;