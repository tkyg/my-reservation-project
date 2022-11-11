import React from 'react'

const NewTable = () => {
  return (
    <div>
      <h1>NewTable</h1>
      <form>
        <div>
          <label>Table Number: </label>
          <input type="number" />
        </div>
        <input type="submit" value="Create Table" />
      </form>
    </div>
  )
}

export default NewTable