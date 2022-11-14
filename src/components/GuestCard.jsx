import React from 'react'
import { NavLink } from "react-router-dom";
import { Div1, Button } from '../styles/cardStyle'

const GuestCard = ({ guest, table, deleteGuest }) => {
  // const handleClick = () => {

  // }
  return (
    <Div1>
      <NavLink style={{fontFamily: "Aboreto", fontSize: "20px", color: "#ccae68"}} to={`/guests/${guest.id}`}>{ guest.name }</NavLink>&emsp; <Button style={{float: 'right'}} onClick={ () => deleteGuest( guest.id ) }>Delete Reservation</Button>
    </Div1>
  )
}

export default GuestCard
