import cross from "../assets/cross.png";
import done from "../assets/done.png";

const TodoItem = ({ todo }) => {
  return (
    <div
      style={{
        background: todo.completed ? "#ed7e3e" : "#7690f6",
        textDecoration: todo.completed ? "line-through" : "none",
        filter: todo.completed ? "blur(2px)" : "none",
        margin: "10px 0",
        borderRadius: "5px",
        color: "white",
        width: "100%",
      }}
      className="todo-item"
    >
      <h2 className="todoText">{todo.title}</h2>
      <div>
        <span>
          <img src={done} className="ok-logo" alt="ok logo" />
        </span>
        <span>
          <img src={cross} className="delete-logo" alt="delete logo" />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
