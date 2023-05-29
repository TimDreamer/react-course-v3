import { useState } from 'react'

const UseStateBasics = () => {
  const [cnt, setCnt] = useState(0)
  return (
    <div>
      <h1>Show cnt: {cnt}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setCnt(cnt + 1)}
      >
        click me
      </button>
    </div>
  )
}

export default UseStateBasics
