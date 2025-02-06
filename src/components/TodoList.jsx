import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
