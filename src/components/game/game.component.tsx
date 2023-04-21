import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ControlBar } from '../controlbar/controlbar.component'
import { GameContainer } from './game.styles'
import { GameCanvas } from '../game_canvas/game_canvas.component';
import { GameDimensions, ScreenSize } from '../../types/global.types';


export function Game() {

    return (
        <GameContainer>
            <GameCanvas />
            <ControlBar />
        </GameContainer>
    );
}