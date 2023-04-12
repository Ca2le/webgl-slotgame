import { useEffect } from "react"
import { Container } from "./styles/App.styles"
import { generateResult } from "./utils/slot_simulator"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {
  const result = generateResult()
  console.log(result)

  return (
    <Provider store={store}>
      <Container className="App">

      </Container>
    </Provider>
  )
}

export default App
