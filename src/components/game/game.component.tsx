import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ControlBar } from '../controlbar/controlbar.component'
import { GameContainer } from './game.styles'
import { GameCanvas } from '../game_canvas/game_canvas.component';
import { GameDimensions } from '../../types/global.types';


export function Game() {
    const initialSize = {
        width: 1000,
        height: 600
    }
    const [screenSize, setScreenSize] = useState(initialSize);

    useEffect(() => {
        function handleResize() {
            const currWindowWidth = window.innerWidth
            setScreenSize({
                width: 1000,
                height: 600
            });
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenSize]);

    return (
        <GameContainer screenSize={screenSize}>
            <GameCanvas screenSize={screenSize} />
            <ControlBar />
        </GameContainer>
    );
}