import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button'; 

const Pokemon = () => {

  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  const getPokemon = async (pokemonNombre) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNombre)
    const data = await res.json();
    setPokemon(data);
  }

  useEffect(() => {
    getPokemon(params.pokemonNombre)
  }, []);

  /* botón volver con useNavigate */
  const navigate3 = useNavigate();
  const irAPokemones = () => {
    navigate3(`/pokemones`)
  }

  return (
    <div>
      <br />
      <h4 className="pokemon-nombre">Pokemón N°: {pokemon.order}</h4>
      <h5>{pokemon.name}</h5>
      <br />
      <div><img className="pokemon-seleccionado" src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} /></div>
      <div>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites?.back_default} alt={pokemon.name} />
      </div>
      <div>
        {pokemon.stats &&
          <li className="pokemon-caracteristicas">
            HP: {pokemon.stats[0].base_stat} |
            Attack: {pokemon.stats[1].base_stat} |
            Defense: {pokemon.stats[2].base_stat} |
            Special Attack: {pokemon.stats[3].base_stat} |
            Special Defense: {pokemon.stats[4].base_stat} |
            Speed: {pokemon.stats[5].base_stat}
          </li>
        }
      </div>
      <br />
      <Button variant="dark" onClick={irAPokemones}>Seleccionar otro Pokemón</Button>
    </div>
  )
}

export default Pokemon