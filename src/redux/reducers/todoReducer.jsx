const initial = {
    todos: [
        { id: 1, title: "Join Your Speaking Class", completed: false },
        { id: 2, title: "30-Minute Reading Session", completed: false },
        { id: 3, title: "Write in Journal/Plan Tomorrow's Activities", completed: true },
    ]
};

const todoReducer = (state = initial, { type, payload }) => {
    switch (type) {
      case "ADD":
        return { ...state, todos: [...state.todos, payload] };
      case "REMOVE":
        return { ...state, todos: state.todos.filter(todo => todo.id !== payload.id) };
      case "DONE": 
         return {
           ...state,
           todos: state.todos.map(todo =>
             todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
           )
         };
      default:
        return state;
    }
  };
  
  export default todoReducer;