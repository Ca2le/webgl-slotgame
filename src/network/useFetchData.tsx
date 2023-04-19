import { NetworkHandler } from "./network_handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/reducer.types";
import { useState } from "react";



export function useData() {
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const fetchNewData = async () => {
        setLoading(true)
        try {
            const DATA = await NetworkHandler.getData()
            dispatch({ type: "UPDATE_DATA", payload: DATA })
            setLoading(false)
        } catch (error) {
                console.log("Fetching data error.🔥💔")
        }

    }

    const gameData = useSelector((state: RootState) => state.game)

    return { gameData, fetchNewData, isLoading}

}