import cancel from "../assets/cancel.png";
import done from "../assets/done.png";


const TodoItem = () => {
    return (
        <div
         style={{
           borderRadius: "5px",
         }}
          className="todo-list"
        >
          <h2 className="todoText"></h2>
          <div>
            <span>
              <img
                src={done}
                className="ok-logo"
                alt="ok logo"
    
              
              />
            </span>
            <span>
              <img
                src={cancel}
                className="delete-logo"
                alt="delete logo"
                
              />
            </span>
          </div>
        </div>
      );
    };
    
    export default TodoItem;
    