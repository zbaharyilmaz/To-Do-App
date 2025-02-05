import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(add(input));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <TextField
          className="todo-input"
          id="outlined-basic"
          label="Task"
          placeholder="Enter your task..."
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
          sx={{
            "&:hover": {
              borderColor: "#f6b676",
              backgroundColor: "#FEFEFE",
            },
          }}
        />
        <Button className="add-button" variant="contained" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default TodoInput;
