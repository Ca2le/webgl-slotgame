import { useFetchData } from '../../network/useFetchData'
import { ControlBar } from '../controlbar/controlbar.component'
import { GameContainer } from './game.styles'

export function Game() {
    const { gameData, fetchGameData } = useFetchData()

    return (
        <GameContainer>
            <ControlBar />
            <div />

        </GameContainer >
    )
}
