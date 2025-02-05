import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const {todos} = useSelector((state)=>state.todos)
    console.log(todos);
   console.clear();
  return (
    <div>
        <div className="todo-list" >
            {
                todos.map((a)=> (<TodoItem key={a.id} a={a} />))
            }
        </div>
    </div>
  );
};

export default TodoList;