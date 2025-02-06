import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../redux/actions/todoActions";
import "./TodoInput.css";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(add(input));
      setInput("");
    }
  };

  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Star Task"
          placeholder="Enter Your Task..."
          variant="outlined"
          sx={{
            margin: 2,
            '& .MuiInputLabel-root': {
              fontFamily: "Pixelify Sans",
                fontSize: '1rem', 
                fontWeight: 'bold',
                color: '#7e3511', 
            },
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
     
        />
        <Button 
        variant="contained" type="submit"
        sx={{
          margin: 2,
          backgroundColor: '#7e3511',
          color: '#f5f5f5',
          fontFamily: "Pixelify Sans",
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
          marginTop: '20px',
          '&:hover': {
                    backgroundColor: '#303f9f', 
                },
           '&:active': {
                    backgroundColor: '#303f9f'},
                '@media (min-width: 1200px)': {
                      fontSize: '2rem', 
                      padding: '8px 9px', 
                  },
                  "@media(max-width: 992px)": {
                      fontSize: '1.75rem', 
                      padding: '8px 15px', 
                  },
                  '@media (max-width: 768px)': {
                      fontSize: '1.25rem', 
                      padding: '8px 16px', 
                  },
                  '@media (max-width: 600px)': {
                      fontSize: '1rem',
                      padding: '4px', 
                      marginTop: '20px',
                  },
        }}>
          ADD
        </Button>
      </form>
    </div>
  );
};

export default TodoInput;
