import './App.css';
import {NavBar} from './myComponents/navBar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { About } from './myComponents/about';
import { Home } from "./myComponents/home";

function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";

  return (
    <>
      <Router>
      <NavBar name={name1} name1={name2}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aryan" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
