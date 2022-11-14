import React from 'react'
import { NavLink } from "react-router-dom";
import { Div1 } from '../styles/cardStyle'

const TableCard = ({ table }) => {
  return (
    <Div1>
      <span>Table:</span><br />
      <NavLink style={{fontFamily: "Aboreto", fontSize: "20px", color: "#ccae68"}} to={`/tables/${table.id}`}>{ table.table_number }</NavLink>
    </Div1>
  )
}

export default TableCard