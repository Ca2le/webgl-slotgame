import { Application, Container, DisplayObject, Graphics } from "pixi.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Result, ScreenSize } from "../../types/global.types";
import { useData } from "../../network/useFetchData";
import { createGridContainer } from "../../utils/create_grid_container/create_grid_container.util";
import { createGameInterface } from "../../utils/create_game_interface/create_game_interface.utils";
import { initialState } from "../../const/const";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reducer.types";
import { createContainer } from "../../utils/create_container/create_container.util";
import { createMask } from "../../utils/create_mask/create_mask.util";
import { store } from "../../store/store";



export function GameCanvas() {
    const { screenSize, game } = useSelector((state: RootState) => state)
    
    const { gameData, fetchNewData, newDataIsLoaded, setNewDataIsLoaded } = useData()

    const memoGameData = useMemo(() => gameData?.grid, [gameData])

    const ref = useRef<HTMLDivElement>(null)


    const createContent = () => {
        // All this does is creating, scaling and positioning the games UI.
        const gameContainer = createContainer("gameContainer")
        const UIContainer = createGameInterface(fetchNewData)
        const maskContainer = createContainer("maskContainer")
        const maskGraph = createMask()
        maskContainer.mask = maskGraph
        const gridContainer = createGridContainer(game.grid)

        gameContainer.addChild(maskContainer)
        gameContainer.addChild(UIContainer)
        maskContainer.addChild(gridContainer)

        return gameContainer
    }

    const memorizedApp = useMemo(() => {
        const app = new Application<HTMLCanvasElement>({ width: screenSize.fullView.width, height: screenSize.fullView.height, backgroundAlpha: 0.2 })
        const container = createContent()
        app.stage.addChild(container)

        return app
    }, [])


    useEffect(() => {
        const element = ref.current
        if (element) {
            element.appendChild(memorizedApp.view)
            memorizedApp.start()
        }
    }, [memorizedApp])

    useEffect(() => {
        if (newDataIsLoaded && memoGameData) {
            console.log(memoGameData)
            makeGridSpin(memorizedApp, memoGameData)
            setNewDataIsLoaded(false)
        }

    }, [newDataIsLoaded])


    return <div style={{ height: "100%", width: "auto" }} ref={ref} />
}




export function makeGridSpin(app: Application<HTMLCanvasElement>, memoGameData: Result) {
    const { symbolSize } = store.getState().screenSize
    const gameContainer = app.stage.getChildByName('gameContainer') as Container<DisplayObject>;
    const maskContainer = gameContainer.getChildByName('maskContainer') as Container<DisplayObject>
    maskContainer.removeChildAt(0)
    const newGridContainer = createGridContainer(memoGameData)
    maskContainer.addChild(newGridContainer)
    // this is very important that it is this height on margin bottom
    const stopAt = symbolSize.height * 0.5

    let speed = 25;

    app.ticker.add((delta) => {

        newGridContainer.position.y += speed * delta;
        if (newGridContainer.position.y >= stopAt) {
            speed = 0
        }
    })


}