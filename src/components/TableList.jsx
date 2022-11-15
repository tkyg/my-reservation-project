import React, { useEffect, useState } from 'react'
import { baseUrl } from '../Global'
import TableCard from './TableCard'

const TableList = () => {
  const [ tables, setTables ] = useState([]);
  
  useEffect(() => {
    fetch(baseUrl + '/tables')
      .then(response => response.json())
      .then(data => setTables(data))
  }, [])

  // const deleteGuest = async id => {
    
  // }

  const tableCards = tables.map((table, index) => <TableCard key={ index } table={ table }/>)  
  return (
    <div style={{fontFamily: "Aboreto", textAlign: "center" }}> 
      <h1>Booked Tables</h1>
      { tableCards }
    </div>
  )
}

export default TableList