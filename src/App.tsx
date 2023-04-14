import { store } from "./store/store"
import { Provider, useDispatch } from "react-redux"
import { Game } from "./components/game/game.component"
import { Container } from "./styles/App.styles"
import { useEffect, useState } from "react"
import { loadAssets } from "./utils/asset_loader/asset_loader"
import { AssetAction } from "./types/reducer.types"
interface Loader {
  loadingBar: number;
  loadingStatus: string;
}

function App() {
  const dispatch = useDispatch()
  const [loader, setLoader] = useState<Loader>({ loadingStatus: "", loadingBar: 0 });

  useEffect(() => {
    if (loader.loadingBar === 0) {
      setLoader({ loadingBar: 10, loadingStatus: "Loading game assets..." })

      async () => {
        const assets = await loadAssets()

        if (assets) {
          dispatch<AssetAction>({ type: "STORE_ASSET", payload: assets })
          setLoader({ loadingBar: 100, loadingStatus: "Assets loaded." })
        } else setLoader({ loadingStatus: "Could not load images... 🧌", loadingBar: 0 })
      }
    }
  }, [])


  return (

    <Container className="App"> 
        <Game />
    </Container>

  )
}

export default App
