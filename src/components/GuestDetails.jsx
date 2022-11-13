import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { baseUrl } from '../Global'
import { Div } from '../styles/cardStyle'


const GuestDetails = () => {
  const [ guest, setGuest ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(baseUrl + `/guests/${id}`)
      .then(response => response.json())
      .then(data => {
        const hour = new Date(data.reservation)
        data.reservation = hour.getUTCHours() + ":" + hour.getUTCMinutes()
        setGuest(data)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <Div>
        <div style={{fontFamily: "Mukta", fontSize: "16px", fontWeight: "900"}}>
        <h3 style={{fontFamily: "Aboreto", fontSize: "30px", color: "#ccae68"}}>{ guest.name }</h3>
        <p><span style={{color:"#ccae68"}}>Number of Guests Arriving:</span>&emsp;{ guest.number_of_guests }</p>
        <p><span style={{color:"#ccae68"}}>Guest Reservation Time:</span>&emsp;{ guest.reservation } pm</p>
        <p><span style={{color:"#ccae68"}}>Guest Notes:</span>&emsp;{ guest.notes }</p>
        <p><span style={{color:"#ccae68"}}>Table Number:</span>&emsp;{guest.table.table_number}</p>
        <p><NavLink to={`/guests/${ guest.id }/edit`}>Edit Booking</NavLink></p>
        </div>
      </Div>
    )
  } 
}

export default GuestDetails