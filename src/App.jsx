import React from "react";
import Todo from "./pages/MainPage/Todo";
import Footer from "./pages/Footer/Footer";
import "./App.css";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="app container-fluid">
      <Header/>
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
