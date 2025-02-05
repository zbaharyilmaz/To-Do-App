const initial = {
    todos: [
        { id: 1, title: "Write Journal/Plan tomorrow’s tasks", completed: false },
        { id: 2, title: "Read 30 minutes of a book", completed: true },
        { id: 3, title: "Do the laundry", completed: true },
    ]
};

const todoReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case "ADD":
            return { ...state, todos: [...state.todos, payload] };
        default:
            return state;
    }
};

export default todoReducer;