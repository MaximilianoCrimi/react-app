import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       <ItemListContainer greeting='Bienvenido a mi page'/>
      </header>
    </div>
  );
}

export default App;
