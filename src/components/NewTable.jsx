import React, { useState } from 'react'
import { Input, Form, InputCreate } from '../styles/formStyle'
import { headers, baseUrl } from '../Global'
import { useNavigate } from 'react-router-dom'
import '../index.css'


const NewTable = () => {
  const [ tableNumber, setTableNumber ] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setTableNumber(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const body = { table_number: tableNumber }
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + '/tables', options)
    // const data = await response.json()
    navigate('/tables')
  }
  return (
    <div style={{fontFamily: "Aboreto", textAlign: "center" }}>
      <h1>New Table for Reservation</h1>
      <Form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="tableNumber">Table Number: </label>
          <Input type="number" id="tableNumber" value={ tableNumber } onChange={ handleChange } autoFocus={ true }/>
        </div><br />
        <InputCreate type="submit" value="Create Table" />
      </Form>
    </div>
  )
}

export default NewTable