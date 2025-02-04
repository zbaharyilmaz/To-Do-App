
const TodoItem = () => {
    return (
        <div
        //   style={{
        //     background: ,
        //     textDecoration: ,
        //     borderRadius: "5px",
        //   }}
          className="todo-list"
        >
          <h2 className="todoText">TO DO APP</h2>
          <div>
            <span>
              <img
                src={okLogo}
                className="ok-logo"
                alt="ok logo"
    
              
              />
            </span>
            <span>
              <img
                src={deleteLogo}
                className="delete-logo"
                alt="delete logo"
                
              />
            </span>
          </div>
        </div>
      );
    };
    
    export default TodoItem;
    