import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClickTracker from "./Components/ClickTracker";
import NavBar from "./Components/NavBar";
import ItemDetail from "./Components/tiendita/ItemDetail";
import ItemList from "./Components/tiendita/ItemList";
import ItemListContainer from "./Components/tiendita/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemList />} />
          <Route path={"/categoria/:categoriaId"} element={<ItemList />} />
          <Route path={"/ItemDetail/:id"} element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>

      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      <ClickTracker />
    </>
  );
}

export default App;
