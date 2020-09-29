import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'white',
  fontWeight: 'bold'
}

export default () => (
  <>
    <NavLink to="/navbar" activeStyle={activeStyle}>
      Navbar
    </NavLink>
    <NavLink to="/sidebar" activeStyle={activeStyle}>
      Sidebar
    </NavLink>
  </>
)
