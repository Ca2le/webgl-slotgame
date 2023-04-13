import React from "react";
import { NetworkHandler } from "./network_handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/reducer.types";



export function useFetchData() {
    const dispatch = useDispatch()

    const fetchGameData = async () => {
        try {
            const DATA = await NetworkHandler.getData()
            dispatch({ type: "UPDATE_DATA", payload: DATA })
        } catch (error) {
                console.log("Fetching data error.🔥💔")
        }

    }

    const gameData = useSelector((state: RootState) => state.game)

    return { gameData, fetchGameData }

}