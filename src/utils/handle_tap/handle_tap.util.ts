import { FederatedPointerEvent } from "pixi.js"
import { GameStatus } from "../../network/slot_simulator"
import { store } from "../../store/store"
import { Result } from "../../types/global.types"

export const handleTap = async (e: FederatedPointerEvent, fetchNewData: () => Promise<GameStatus | undefined>) => {
    console.log('Btn 👻')
    const dataStatus: GameStatus = {
        grid: [],
        win: {
            scatters: [],
            threeInARow: [],
            fourInARow: [],
            fiveInARow: [],
        }
    }
    const prevGameStatus = store.getState().game
    const prev = prevGameStatus.grid
    console.log("is it 8?", prev)
    fetchNewData()
        .then(result => {
            const latest = result?.grid
            if (latest) {
                const grid = prev.map((reel, i) => {
                    const newReel = []
                    for (let index = 0; index < 16; index++) {
                        newReel.push(latest[i][index])
                    }
                    for (let index = 0; index < 3; index++) {
                        newReel.push(prev[i][index])
                    }
                    //Swapping places position 
                    return newReel
                })
                dataStatus.grid = grid as Result
                store.dispatch({
                    type: 'UPDATE_DATA',
                    payload: dataStatus
                })


            }

        })

}
