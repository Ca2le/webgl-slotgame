import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ControlBar } from '../controlbar/controlbar.component'
import { GameContainer } from './game.styles'
import { GameCanvas } from '../game_canvas/game_canvas.component';
import { useDispatch } from 'react-redux';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize(): WindowSize {

    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export function Game() {
    const { width, height } = useWindowSize();
    const dispatch = useDispatch()

    useEffect(() => {
        if (width && height) {
            const size = { width, height }
            // This dont work at mom, cues I have no method for rewriing all the assets.
            const square = height / width
            dispatch({ type: "UPDATE_SCREEN", payload: size })
        }

    }, [width, height])

    return (
        <GameContainer>
            <GameCanvas />

        </GameContainer>
    );
}