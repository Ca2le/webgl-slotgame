import { store } from "./store/store"
import { Provider } from "react-redux"
import { Game } from "./components/game/game.component"
import { Container } from "./styles/App.styles"
function App() {

  return (
    <Provider store={store}>
      <Container className="App">
        <Game />
      </Container>
    </Provider>
  )
}

export default App
