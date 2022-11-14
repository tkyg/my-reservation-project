import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { baseUrl } from '../Global'
import GuestCard from './GuestCard'
import { Div2 } from '../styles/cardStyle'

const TableDetails = () => {
  const [ table, setTable ] = useState('');
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
      // remove from backend
  const deleteGuest = async id => {
    const response = await fetch(baseUrl + `/guests/${ id }`, { method: "DELETE"})
    const data = await response.json();
    removeGuest( id )
  }
  
  // remove from state
  const removeGuest = id => {
    setTable({
      ...table,
      guests: table.guests.filter( guest => guest.id!= id)
    })
  }

    const guestCards = table.guests.map((guest, index) => <GuestCard key={ index } guest={ guest } table={ table } deleteGuest= { deleteGuest } />)
    return (
      <div>
        <h1 style={{fontFamily: "Aboreto", textAlign: "center" }}>Seated at Table: { table.table_number }</h1>
        { guestCards }
        <br />
        <Div2 style={{fontFamily: "Mukta", fontSize: "16px", fontWeight: "900"}}><NavLink to={`/tables/${ table.id }/edit`}>Edit Reservation</NavLink></Div2><br/>
        <Div2 style={{fontFamily: "Mukta", fontSize: "16px", fontWeight: "900"}}><NavLink to={`/tables/${ table.id}/guests/new`}>Create Guest</NavLink></Div2>
      </div>
    )
  }
}

export default TableDetails