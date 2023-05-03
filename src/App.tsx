import { Game } from "./components/game/game.component"
import { Container } from "./styles/App.styles"
import { useEffect, useState } from "react"
import { loadAssets } from "./utils/asset_loader/asset_loader.utils"

interface Loader {
  loadingBar: number;
  loadingStatus: string;
}

function App() {
  const [loader, setLoader] = useState<Loader>({ loadingStatus: "", loadingBar: 0 });
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const loading = async () => {
      setLoader({ loadingBar: 30, loadingStatus: "...Loading...game...assets...30%..." });
      const assets = await loadAssets()
      await new Promise((res) => {
        setTimeout(() => {
          res("")
        }, 1000)
      })
      setLoader({ loadingBar: 50, loadingStatus: "...Complete...100%..." });
      await new Promise((res) => {
        setTimeout(() => {
          res("")
        }, 1000)
      })
      if (assets) {
        setLoader({ loadingBar: 100, loadingStatus: "...Complet...100%..." })
        setLoaded(true)
      } else setLoader({ loadingStatus: "Could not load images... 🧌", loadingBar: 0 })
    }
    loading()
  }, [])

  if (isLoaded) {
    return (
      <Container className="App">
        <Game />
      </Container>
    )
  } else {
    return <div>
      {/* Have to render the fonts before app inits otherwise they wont be cached */}
      <h1 style={{ fontFamily: 'Sigmar' }} >{loader.loadingStatus}</h1>
      <p style={{ fontFamily: 'Open Sans' }} />
    </div>
  }
}



export default App
