import React, { useState, useEffect }from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Input, Form, InputCreate} from '../styles/formStyle'
import { baseUrl, headers } from '../Global'

const NewGuest = () => {
  const navigate = useNavigate()
  const [ table, setTable ] = useState("")
  // const [ loading, setLoading ] = useState(true)
  const [ state, setState ] = useState({
    name: "",
    number_of_guests: "", 
    reservation: "",
    notes: ""
  })
  const { tableId } = useParams();

  useEffect(() => {
    fetch(baseUrl + `/tables/${tableId}`)
      .then(response => response.json())
      .then(data => {
        setTable(data)
      })
  }, [])

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(state)
    }
    const response = await fetch(baseUrl + `/tables/${ tableId }/guests`, options)
    const data = await response.json()
    navigate(`/tables/${ tableId }`)
  }
  

  return (
    <div>
      <h3> New Reservation for { table.table_number }</h3>
      <Form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <Input type="text" name="name" id="name" value={ state.name } onChange={ handleChange } />
        </div><br />
        <div>
        <label htmlFor="number_of_guests">Number of Guests Arriving: </label>
          <Input type="number" name="number_of_guests" id="number_of_guests" value={ state.number_of_guests } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="reservation">Reservation Time: </label>
          <Input type="time" name="reservation" id="reservation" value={ state.reservation } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="notes">Notes: </label>
          <Input type="text" name="notes" id="notes" value={ state.notes } onChange={ handleChange } />
        </div><br />
        <div><InputCreate type="submit" value="Add Reservation" /></div>
      </Form>
    </div>
  )
}

export default NewGuest