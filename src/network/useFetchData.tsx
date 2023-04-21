import { NetworkHandler } from "./network_handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/reducer.types";
import { useState } from "react";



export function useData() {
    // const [isLoading, setLoading] = useState(false)
    const [newDataIsLoaded, setNewDataIsLoaded] = useState(false)
    const dispatch = useDispatch()

    const fetchNewData = async () => {
        try {
            // Here we might have to set a timeout 1 sec, just to hide the change of the grid.
            const DATA = await NetworkHandler.getData()
            dispatch({ type: "UPDATE_DATA", payload: DATA })
          
            return DATA
        } catch (error) {
                console.log("Fetching data error.🔥💔")
        } finally {
            setNewDataIsLoaded(true)
        }

    }

    const gameData = useSelector((state: RootState) => state.game)

    return { gameData, fetchNewData, newDataIsLoaded, setNewDataIsLoaded}

}