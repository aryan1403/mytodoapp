import './App.css';
import myComp from './myComp';

function App() {
  let name1 = "Aaryan";

  return (
    <div>
      <h1>Hello {name1}</h1>
      <myComp name="Arush"/>
    </div>
  );
}

export default App;
