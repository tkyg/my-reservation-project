import React from 'react'
import { StyledHeader } from "../styles/homeStyle"

const Home = () => {
  return (
    <StyledHeader>
      <h1 style={{fontFamily: "Aboreto", textAlign: "center" }}> Guest Reservation</h1>
      <h5 style={{"textAlign": "right", "fontFamily": "Aboreto"}}>- Your Frontdesk Assistant</h5>
    </StyledHeader>
  )
}

export default Home