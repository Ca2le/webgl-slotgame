import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ControlBar } from '../controlbar/controlbar.component'
import { GameContainer } from './game.styles'
import { GameCanvas } from '../game_canvas/game_canvas.component';
import { GameDimensions } from '../../types/global.types';


export function Game() {
    const initialSize = {
        width: window.innerWidth* 0.8,
        height: window.innerWidth * GameDimensions.aspectRatio * 0.8
    }
    const [screenSize, setScreenSize] = useState(initialSize);

    useEffect(() => {
        function handleResize() {
            const currWindowWidth = window.innerWidth
                setScreenSize({
                    width: (currWindowWidth) * 0.8,
                    height: (currWindowWidth * GameDimensions.aspectRatio) * 0.8
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