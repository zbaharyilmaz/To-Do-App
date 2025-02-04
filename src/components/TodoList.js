import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const {todos} = useSelector((state)=>state.todoReducer)
    console.log(todos);
  return (
    <div>
        <div className="todo-list">
            {
                [].map((a)=>(<TodoItem/>))
            }
        </div>
    </div>
  );
};

export default TodoList;