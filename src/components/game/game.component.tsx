import React from 'react'
import { useFetchData } from '../../network/useFetchData'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/reducer.types'

export function Game() {
    const { gameData, fetchGameData } = useFetchData()
    console.log(gameData)
    return (
        <div>
            <button onClick={() => {
                fetchGameData()
            }}>
                fetch data
            </button>
        </div>
    )
}
