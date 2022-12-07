import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido a mi page' />} />  
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
