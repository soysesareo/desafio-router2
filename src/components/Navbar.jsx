import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgPokemon } from 'react-icons/cg';

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");
  return (
    <div className="nav">
      <div>
        <CgPokemon
          size="26px"
        />
      </div>
      <div className="justify-content-end">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {" "}
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar