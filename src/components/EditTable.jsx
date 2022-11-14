import React, { useState, useEffect } from 'react'
import { Input, Form, InputCreate } from '../styles/formStyle'
import { headers, baseUrl } from '../Global'
import { useNavigate, useParams } from 'react-router-dom'
// import '../index.css'


const EditTable = () => {
  const [ tableNumber, setTableNumber ] = useState('')
  const [ table, setTable ] = useState('')
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(baseUrl + `/tables/${id}`)
    .then(response => response.json())
    .then(data => {
      setTable(data)
      setTableNumber(data.table_number)
    })
  }, [])

  const handleChange = e => {
    setTableNumber(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const body = { table_number: tableNumber }
    const options = {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body)
    }
    await fetch(baseUrl + `/tables/${ id }`, options)
    // const data = await response.json()
    navigate(`/tables/${ id }`)
  }
  return (
    <div style={{"fontFamily": "Mukta"}}>
      <h1 style={{fontFamily: "Aboreto", textAlign: "center" }}>Updating { table.table_number }</h1>
      <Form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="tableNumber">Table Number: </label>
          <Input type="number" id="tableNumber" value={ tableNumber } onChange={ handleChange } autoFocus={ true }/>
        </div>
        <InputCreate type="submit" value="Update Table" />
      </Form>
    </div>
  )
}

export default EditTable