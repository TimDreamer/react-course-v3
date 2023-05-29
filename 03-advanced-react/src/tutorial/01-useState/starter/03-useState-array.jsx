import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <React.Fragment key={id}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </React.Fragment>
        )
      })}
      <button
        style={{ display: 'block', margin: 'auto' }}
        className="btn"
        onClick={() => setPeople([])}
      >
        clear all
      </button>
    </div>
  )
}

export default UseStateArray
