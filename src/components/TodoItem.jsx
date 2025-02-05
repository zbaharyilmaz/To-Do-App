import cross from "../assets/cross.png";
import done from "../assets/done.png";


const TodoItem = ({todo}) => {
    return (
        <div
         style={{ 
          background: todo.completed? "#eb8b62": "#8ba3e8",
          textDecoration: todo.completed? "line-through": "none",
           borderRadius: "5px",
           margin:" 10px",
           width: "100%",
         textDecorationColor: todo.completed ? "brown" : "initial" 
         }}
          className="todo-list"
        >
          <h2 className="todoText">{todo.title}</h2>
          <div>
            <span>
              <img
                src={done}
                className="ok-logo"
                alt="ok logo"
                style={{filter: "sepia(50%)"}}
    
              
              />
            </span>
            <span>
              <img
                src={cross}
                className="delete-logo"
                alt="delete logo"
                style={{filter: "sepia(10%)"}}
                
              />
            </span>
          </div>
        </div>
      );
    };
    
    export default TodoItem;
    