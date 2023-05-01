import { GameStatus } from "../../network/slot_simulator";
import { store } from "../../store/store";
import { gameController } from "../handle_tap/handle_tap.util";

export async function startAutobet(fetchNewData: () => Promise<GameStatus | undefined>) {
    const { numbersOfBets, autoLoading } = store.getState().autobet
    let times = numbersOfBets
    if (autoLoading) {
        //start spin immiditley
        times--
        await gameController(fetchNewData)
        store.dispatch({ type: "DECREMENT_AUTOBET" })

        while (times > 0 && autoLoading) {
            times--
            await new Promise((resolve) => setTimeout(resolve, 3000));
            await gameController(fetchNewData)
            store.dispatch({ type: "DECREMENT_AUTOBET" })
        }
        await new Promise((resolve) => setTimeout(() => {
            store.dispatch({ type: "SET_AUTO_LOADING", status: false })
        }, 3000));
    }



}

