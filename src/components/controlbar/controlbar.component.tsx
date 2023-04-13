import React from 'react'
import { AudioVolume, Balance, BalanceBoard, Bet, ControlBarContainer, GameConfig, Information, Settings, Signature, Win } from './controlbar.styles'

export function ControlBar() {
    return (
        <ControlBarContainer>
            <GameConfig>
                <Settings />
                <AudioVolume />
                <Information />
            </GameConfig>
            <BalanceBoard>
                <Balance>$1,000.00</Balance>
                <Bet>$0.2</Bet>
                <Win>$0.00</Win>
            </BalanceBoard>
            <Signature>Game Created by Ca2le</Signature>
        </ControlBarContainer>
    )
}
