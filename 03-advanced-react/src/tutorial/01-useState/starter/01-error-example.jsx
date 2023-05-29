let cnt = 0

const handleLCLick = () => {
  cnt++
  console.log(cnt)
}

const ErrorExample = () => {
  return (
    <div>
      <h2>value: {cnt}</h2>
      <button onClick={handleLCLick}>Click me</button>
    </div>
  )
}

export default ErrorExample
