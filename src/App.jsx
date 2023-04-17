
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Pokemones from "./components/Pokemones";
import Pokemon from "./components/Pokemon";

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemon/:pokemonNombre" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App