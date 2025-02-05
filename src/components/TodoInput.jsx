import { TextField, Button} from "@mui/material";

const TodoInput = () => {
  return (
    <div>
      {/* <form>
      <input
        className="todo-input"
        type="text"
        placeholder="Add New Task"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form> */}
      <form className="todo-form">
        <TextField
          className="todo-input"
          id="outlined-basic"
          label="Add Your New Task"
          variant="outlined"

        />
        <Button className="add-button" variant="contained" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default TodoInput;
