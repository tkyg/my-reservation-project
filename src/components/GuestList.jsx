import React, { useEffect, useState } from 'react'
import { baseUrl } from '../Global'
import GuestCard from './GuestCard'

const GuestList = () => {
  const [ guests, setGuests ] = useState([]);
  
  useEffect(() => {
    fetch(baseUrl + '/guests')
      .then(response => response.json())
      .then(data => setGuests(data))
  }, [])

  const guestCards = guests.map((guest, index) => <GuestCard key={ index } guest={ guest } table={ guest.table }/>)  
  return (
    <div> 
      <h1>Guest List</h1>
      { guestCards }
    </div>
  )
}

export default GuestList