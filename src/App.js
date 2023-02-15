import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Signin from "./components/Signin";
import Register from "./components/Register";
import Home from "./components/Home";
import Logout from "./components/Logout";
import CreateTodo from "./components/CreateTodo";
import Description from "./components/Description";
// import Todo from './components/Todo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="createtodo" element={<CreateTodo />} />
          <Route exact path="signin" element={<Signin />} />
          <Route exact path="register" element={<Register />} />
         <Route exact path="description" element={<Description/>} />
          <Route exact path="logout" element={<Logout />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
