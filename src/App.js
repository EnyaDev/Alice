import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
// import ItemCount from "./Components/ItemCount/ItemCount";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  function logOutSession() {
    console.log("logout");
  }

  function logInSession(username) {
    alert(`Bienvenido el usuario: ${username}`);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar onLogin={logInSession} onLogout={logOutSession} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
