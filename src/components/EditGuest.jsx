import React, { useState, useEffect }from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Input, Form, InputCreate} from '../styles/formStyle'
import { baseUrl, headers } from '../Global'

const EditGuest = () => {
    const [name, setName] = useState("")
    const [numberOfGuest, setNumberOfGuest] = useState("")
    const [reservation, setReservation] = useState("")
    const [note, setNote] = useState("")
    const [guest, setGuest ] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()

  useEffect(() => {
    fetch(baseUrl + `/guests/${ id }`)
      .then(response => response.json())
      .then(data => {
        setGuest(data)
        setName(data.name)
        setNumberOfGuest(data.number_of_guests)
        setReservation(data.setReservation)
        setNote(data.notes)
      })
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    const options = {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        name: name,
        number_of_guests: numberOfGuest,
        reservation: reservation,
        notes: note,
      })
    }
    await fetch(baseUrl + `/guests/${ id }`, options)
    navigate(`/guests/${ id }`)
  }

  return (
    <div style={{fontFamily: "Aboreto", textAlign: "center" }}>
      <h1>Updating Reservation of { guest.name } </h1><br />
      <Form onSubmit={ handleSubmit }>
        <div>
        <label htmlFor="name">Name: </label>
        <Input type="text" name="name" id="name" value={ name } onChange={e => setName(e.target.value)} autoFocus={ true }/>
        </div> <br />
        <div>
        <label htmlFor="numberOfGuest">Number Guests Arriving: </label>
        <Input type="number" name="numberOfGuest" id="numberOfGuest" value={ numberOfGuest } onChange={e => setNumberOfGuest(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="reservation">Reservation Time: </label>
        <Input type="time" name="reservation" id="reservation" value={ reservation } onChange={e => setReservation(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="note">Notes: </label>
        <Input type="text" name="note" id="note" value={ note } onChange={e => setNote(e.target.value)}/>
        </div> <br />
        <div><InputCreate type="submit" value="Update Guest Details" /></div>
      </Form>
    </div>
  )
}

  

//   return (
//     <div style={{fontFamily: "Aboreto", textAlign: "center" }}>
//       <h3> Update Reservation </h3>
//       <Form onSubmit={ handleSubmit }>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <Input type="text" name="name" id="name" value={ name } onChange={ handleChange } />
//         </div><br />
//         <div>
//         <label htmlFor="number_of_guests">Number of Guests Arriving: </label>
//           <Input type="number" name="number_of_guests" id="number_of_guests" value={ number_of_guests } onChange={ handleChange } />
//         </div><br />
//         <div>
//           <label htmlFor="reservation">Reservation Time: </label>
//           <Input type="time" name="reservation" id="reservation" value={ reservation } onChange={ handleChange } />
//         </div><br />
//         <div>
//           <label htmlFor="notes">Notes: </label>
//           <Input type="text" name="notes" id="notes" value={ notes } onChange={ handleChange } />
//         </div><br />
//         <div><InputCreate type="submit" value="Update Reservation" /></div>
//       </Form>
//     </div>
//   )
// }

export default EditGuest