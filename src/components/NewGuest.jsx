import React, { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { Input, Form, InputCreate} from '../styles/formStyle'

const NewGuest = () => {
  const [ table, newTable ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const { tableId } = useParams();
  return (
    <div>
      <h3> New Reservation: { table.table_number }</h3>
      <Form>
        <div>
          <label htmlFor="name">Name: </label>
          <Input type="text" name="name" id="name" value={ name } />
        </div><br />
        <div>
        <label htmlFor="numberOfGuests">Number of Guests Arriving: </label>
          <Input type="number" name="numberOfGuests" id="numberOfGuests" value={ number_of_guests } />
        </div><br />
        <div>
          <label htmlFor="reservation">Reservation Time: </label>
          <Input type="time" name="reservation" id="reservation" value={ reservation } />
        </div><br />
        <div>
          <label htmlFor="notes">Notes: </label>
          <Input type="text" name="notes" id="notes" value={ notes } />
        </div><br />
        <div><InputCreate type="submit" value="Add Reservation" /></div>
      </Form>
    </div>
  )
}

export default NewGuest