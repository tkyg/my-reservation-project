import React, { useState, useEffect } from 'react'
import { baseUrl } from '../Global'

const TableList = () => {
  const [ tables, setTables ] = useState([])
  
  useEffect(() => {
    fetch(baseUrl + '/tables')
      .then(response => response.json())
      .then(data => setTables(data))
  }, [])

  return (
    <div> 
      <h1>TableList</h1>
    </div>
  )
}

export default TableList