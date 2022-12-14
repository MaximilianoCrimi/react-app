import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView";
import './firebase/config'
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting='Bienvenido a mi page' />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartView/>}/>
              <Route path="/CheckOut" element={<CheckOut/>}/>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </CartContextProvider>
  );
}

export default App;
