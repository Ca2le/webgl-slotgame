import { Game } from "./components/game/game.component"
import { Container } from "./styles/App.styles"
import { useEffect, useState } from "react"
import { loadAssets } from "./utils/asset_loader/asset_loader"

interface Loader {
  loadingBar: number;
  loadingStatus: string;
}

function App() {
  const [loader, setLoader] = useState<Loader>({ loadingStatus: "", loadingBar: 0 });

  useEffect(() => {
    if (loader.loadingBar === 0) {
      setLoader({ loadingBar: 10, loadingStatus: "Loading game assets..." });
      (async () => {
        const assets = await loadAssets()
        if (assets) {
          setLoader({ loadingBar: 100, loadingStatus: "Assets loaded." })
        } else setLoader({ loadingStatus: "Could not load images... 🧌", loadingBar: 0 })
      })()
    }
  }, [])

  if (loader.loadingBar === 100) {
    return (
      <Container className="App">
        <Game />
      </Container>
    )
  } else {
    return <div>
      <h1>{loader.loadingStatus}</h1>
    </div>
  }
}



export default App
