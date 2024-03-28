import HomePage from "./components/Home Page/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" Component={HomePage} />{" "}
      </Routes>{" "}
    </>
  );
};

export default App;
