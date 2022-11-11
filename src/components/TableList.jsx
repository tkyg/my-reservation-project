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

  const tableCards = tables.map((table, index) => <TableCard key={ index } table={ table }/>)  
  return (
    <div> 
      <h1>TableList</h1>
      { tableCards }
    </div>
  )
}

export default TableList