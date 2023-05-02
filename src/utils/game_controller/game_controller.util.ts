import { GameStatus } from "../../network/slot_simulator"
import { store } from "../../store/store"
import { Result } from "../../types/global.types"
import { updateUI } from "../update_ui/update_ui"

export const gameController = async(fetchNewData: () => Promise<GameStatus | undefined>, bet?: string) => {
    if (bet) {
        store.dispatch({ type: bet })
    }

    console.log('Update 👻')
    const oldGrid = store.getState().game.grid
    const response = await fetchNewData()

    if (response) {
        const newGrid = response?.grid
        const updatedGrid = oldGrid.map((reel, i) => {
            const newReel = []
            for (let index = 0; index < 16; index++) {
                newReel.push(newGrid[i][index])
            }
            for (let index = 0; index < 3; index++) {
                newReel.push(oldGrid[i][index])
            }
            //Swapping places position 
            return newReel
        }) as Result

        const dataStatus: GameStatus = {
            grid: updatedGrid,
            wins: response.wins,
            payLines: response.payLines,
            payLineNumber: response.payLineNumber,
            filterdPayLine: response.filterdPayLine,
            winningSymbol: response.winningSymbol,
            totalPrice: response.totalPrice
        }

        store.dispatch({
            type: 'UPDATE_DATA',
            payload: dataStatus
        })

    }


}
