import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ControlBar } from '../controlbar/controlbar.component'
import { GameContainer } from './game.styles'
import { GameCanvas } from '../game_canvas/game_canvas.component';
import { GameDimensions, ScreenSize } from '../../types/global.types';


export function Game() {
    const initialSize = {
        fullView: {
            width: 1000,
            height: 600
        },
        // 100px * 5 symbols = 500 width
        // 100px * 3 symbols = 300 height = 3 symbols showing
        maskSize: {
            width: 750,
            height: 450
        },
        // 100px * 8 symbols = 800 height
        // 100px * 5 symbols = 500 width
        gridSize: {
            width: 750,
            height: 1200
        },
        UI_Size: {
            width: 1000,
            height: 100
        },
        symbolSize: {
            width: 150,
            height: 150
        }


    }

    const [screenSize, setScreenSize] = useState<ScreenSize>(initialSize);

    // RESIZE EVENT FOR LATER RESPONSIVE DESIGN
    // useEffect(() => {
    //     function handleResize() {
    //         const currWindowWidth = window.innerWidth
    //         setScreenSize({
    //             width: 1000,
    //             height: 600
    //         });
    //     }
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [screenSize]);

    return (
        <GameContainer screenSize={screenSize.fullView}>
            <GameCanvas screenSize={screenSize} />
            <ControlBar />
        </GameContainer>
    );
}