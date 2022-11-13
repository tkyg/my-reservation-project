import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../Global'
import GuestCard from './GuestCard'

const TableDetails = () => {
  const [ table, setTable ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(baseUrl + `/tables/${id}`)
      .then(response => response.json())
      .then(data => {
        setTable(data)
        setLoading(false)
      })
  }, [])
  if(loading) {
    return <h1>Loading...</h1>
  } else {
    const guestCards = table.guests.map((guest, index) => <GuestCard key={ index } guest={ guest } table={ table }/>)
    return (
      <div>
        <h1>{ table.table_number }</h1>
        <p>Create Guest</p>
        { guestCards }
      </div>
    )
  }
}

export default TableDetails