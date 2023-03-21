import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import InfoIcon from '@mui/icons-material/Info';
export const Header = () => {
  return (
    <header>
      <figure>
        <img src={logo} alt="logo de react" />
      </figure>
      <h1>
        Bienvenidos
      </h1>
      <input type="checkbox" id='nav1' />
      <label htmlFor="nav1">Secciones</label>
      <nav id='ppal'>
        <NavLink to={'/'}>
          <HomeIcon />
          <span>Inicio</span>
        </NavLink>
        <NavLink to={'servicios'}>
          <WorkIcon />
          <span>Servicios</span>
        </NavLink>
        <NavLink to={'fun'}>
          <SentimentVerySatisfiedIcon />
          <span>Aficiones</span>
        </NavLink>
        <NavLink to={'contacto'}>
          <InfoIcon />
          <span>
            contacto
          </span>
        </NavLink>
      </nav>
    </header>
  )
}
