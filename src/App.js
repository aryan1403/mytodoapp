import './App.css';
import {NavBar} from './myComponents/navBar';
import {ItemList} from './myComponents/itemList';

function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";

  return (
    <>
      <NavBar name={name1} name1={name2}/>
      <ItemList/>
    </>
  );
}

export default App;
