import { useState } from 'react'

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'Anna',
    age: 24,
    hobby: 'camping',
  })

  const setJohn = () => {
    setPeople({
      name: 'John',
      age: 30,
      hobby: 'coding',
    })
  }
  return (
    <div>
      <h1>{people.name}</h1>
      <h2>{people.age}</h2>
      <h3>Enjoys To: {people.hobby}</h3>
      <button
        onClick={setJohn}
        className="btn"
      >
        show John
      </button>
    </div>
  )
}

export default UseStateObject
