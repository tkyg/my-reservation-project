import React from 'react'
import { StyledLink, DivLink } from "../styles/styledLink"


const NavBar = () => {
  return (
    <DivLink>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/guests">Guest List</StyledLink>
    <StyledLink to="/guests/new">New Reservation</StyledLink>
    <StyledLink to="/tables">Table List</StyledLink>
  </DivLink>
  )
}

export default NavBar