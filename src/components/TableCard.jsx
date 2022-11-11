import React from 'react'
import { NavLink } from 'react-router-dom'

const TableCard = ({ table }) => {
  return (
    <li>
      <NavLink to={`/tables/${table.id}`}>{ table.table_number }</NavLink>
    </li>
  )
}

export default TableCard