import React, { useState } from 'react'

const NewTable = () => {
  const [ tableNumber, setTableNumber ] = useState('')

  const handleChange = e => {
    setTableNumber(e.target.value)
  }
  return (
    <div>
      <h1>NewTable</h1>
      <form>
        <div>
          <label>Table Number: </label>
          <input type="number" value={ tableNumber } onChange={ handleChange }/>
        </div>
        <input type="submit" value="Create Table" />
      </form>
    </div>
  )
}

export default NewTable