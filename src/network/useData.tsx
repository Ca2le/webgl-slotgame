import { NetworkHandler } from "./network_handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/reducer.types";
import { useState } from "react";



export function useData() {
    const [newDataIsLoaded, setNewDataIsLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { bet } = useSelector((state: RootState) => state.gameEconomy)
    const fetchNewData = async () => {
        dispatch({ type: "LOADING" })
        try {
            const DATA = await NetworkHandler.getData(bet)
            dispatch({ type: "UPDATE_DATA", payload: DATA })
            return DATA

        } catch (error) {
            console.log("Fetching data error.🔥💔")
        } finally {

            setNewDataIsLoaded(true)
        
           

        }

    }



    const gameData = useSelector((state: RootState) => state.game)

    return { loading, gameData, fetchNewData, newDataIsLoaded, setNewDataIsLoaded }

}