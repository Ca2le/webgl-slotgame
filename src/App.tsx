import { store } from "./store/store"
import { Provider } from "react-redux"
import { Game } from "./components/game/game.component"

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Game />
      </div>
    </Provider>
  )
}

export default App
