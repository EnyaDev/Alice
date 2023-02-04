import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Components/storage/cartContext";


function App() {
  function logOutSession(username) {
    alert(`See you soon!`);
}

function logInSession(username) {
alert(`Bienvenido el usuario: ${username}`);

}
return (
<>
    
    <BrowserRouter>
      <CartProvider>
      <NavBar onLogin={logInSession} onLogout={logOutSession} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  </> 
);  
}

export default App;