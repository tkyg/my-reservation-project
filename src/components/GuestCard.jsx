import React from 'react'
import { NavLink } from "react-router-dom";
import { Div1 } from '../styles/cardStyle'

const GuestCard = ({ guest }) => {
  return (
    <Div1>
      <NavLink style={{fontFamily: "Aboreto", fontSize: "20px", color: "#ccae68"}} to={`/guests/${guest.id}`}>{ guest.name }</NavLink>- seated at { guest.table.table_number }
    </Div1>
  )
}

export default GuestCard
