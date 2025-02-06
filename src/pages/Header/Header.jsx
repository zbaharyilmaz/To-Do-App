import star1 from "../../assets/star1.svg"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <h2 className="todo-head">
        <span>
          <img className="todo-icon" src={star1} alt="Star Icon" />
        </span>
      TO DO LIST
        <span>
          <img className="todo-icon" src={star1} alt="Star Icon" />
        </span>
      </h2>
    </div>
  );
};

export default Header;
