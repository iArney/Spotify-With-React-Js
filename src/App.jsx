// import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Home from "./components/Home";
import Main from "./components/Main";
import Trends from "./components/pages/Trends";

function App() {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
}

export default App;
