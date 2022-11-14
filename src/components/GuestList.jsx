import React, { useEffect, useState } from 'react'
import { baseUrl } from '../Global'
import GuestCard from './GuestCard'

const GuestList = () => {
  const [ guest, setGuest ] = useState([]);
  
  useEffect(() => {
    fetch(baseUrl + '/guests')
      .then(response => response.json())
      .then(data => setGuest(data))
  }, [])

  // remove from backend
  const deleteGuest = async id => {
    const response = await fetch(baseUrl + `/guests/${ id }`, { method: "DELETE"})
    const data = await response.json();
    removeGuest( id )
  }
  
  // remove from state
  const removeGuest = id => {
    setGuest(guest.filter( guest => guest.id!= id))
  }

  const guestCards = guest.map((guest, index) => <GuestCard key={ index } guest={ guest } table={ guest.table } deleteGuest={ deleteGuest }/>)  
  return (
    <div style={{fontFamily: "Aboreto", textAlign: "center" }}> 
      <h3>Guest List</h3>
      <div>{ guestCards }</div>
    </div>
  )
}

export default GuestList