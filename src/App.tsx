import { useEffect } from "react"
import { Container } from "./styles/App.styles"
import { generateResult } from "./utils/slot_simulator"

function App() {
  const result = generateResult()
  console.log(result)

  return (
    <Container className="App">

    </Container>
  )
}

export default App
