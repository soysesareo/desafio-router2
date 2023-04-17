import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Pokemones = () => {

  const [pokemones, setPokemones] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState([]);
  const navigate = useNavigate();


  const getPokemones = async () => {
    const res = await fetch(" https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    setPokemones(data.results);
  };
  
  useEffect(() => {
    getPokemones();
  }, []);

  const irADetalle = () => {
    navigate(`/pokemon/${pokemonSeleccionado}`)
  };

  return (
    <div>
      <br />
      <p>Selecciona un Pokemón</p>
      <form action="#">
        <select name="números" id="numero" onChange={({ target }) => setPokemonSeleccionado(target.value)} >
          <option type="text">Pokemones</option>
          {pokemones.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
      </form>
      <br />
      <Button variant="dark" onClick={() => irADetalle()} >Ver detalle</Button>
      <br /><br />
    </div>
  )
}

export default Pokemones