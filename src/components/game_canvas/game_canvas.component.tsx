import { Application, Container, DisplayObject, Graphics, MaskData } from "pixi.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Result, ScreenSize } from "../../types/global.types";
import { useData } from "../../network/useFetchData";
import { createSpriteGrid } from "../../utils/create_sprite_grid/create_sprite_grid";
import { createGameInterface } from "../../utils/create_game_interface/create_game_interface";
import { spriteList } from "../../const/const";

export function GameCanvas({ screenSize }: ScreenSize) {
    const { gameData, fetchNewData, isLoading } = useData()
    const memoFetch = useCallback(() => {
        return fetchNewData();
    }, [fetchNewData]);

    const ref = useRef<HTMLDivElement>(null)

    const createContent = () => {
        const initialResult = [
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "K"]
        ] as Result

        const gameContainer = new Container()
        const UIContainer = createGameInterface(memoFetch)
        const gridContainer = createSpriteGrid(initialResult)
        const mask = createMask(screenSize.width, screenSize.height * 0.8)

        gridContainer.mask = mask
        gameContainer.addChild(UIContainer)
        gameContainer.addChild(gridContainer)
        return gameContainer

    }

    const memorizedApp = useMemo(() => {
        const app = new Application<HTMLCanvasElement>({ backgroundAlpha: 0.2 })
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
        if (memorizedApp) {
            const gameContainer = memorizedApp.stage.getChildAt(0) as Container<DisplayObject>;
            const gridContainer = gameContainer.getChildByName("gridContainer") as Container<DisplayObject>
            const UIContainer = gameContainer.getChildByName("UIContainer") as Container<DisplayObject>
            const maskGraph = gridContainer.mask as Graphics

            const canvasWidth = memorizedApp.view.width;
            const canvasHeight = memorizedApp.view.height;
            // CANVAS ADJUSTMENT 
            memorizedApp.view.width = screenSize.width
            memorizedApp.view.height = screenSize.height
            memorizedApp.screen.width = screenSize.width
            memorizedApp.screen.height = screenSize.height

            // SLOT SYMBOL GRID ADJUSTMENT 
            const gridWidth = screenSize.width * 0.8
            const gridHeight = screenSize.height * 1.8
            gridContainer.width = gridWidth
            gridContainer.height = gridHeight
            gridContainer.position.set((canvasWidth - gridContainer.width) / 2, (canvasHeight - gridContainer.height) / 2.4)


            // UI BAR ADJUSTMENT 
            UIContainer.position.set((canvasWidth - UIContainer.width) / 2, canvasHeight - UIContainer.height);

            console.log(maskGraph)
            // MASK ADJUSTMENT 
            maskGraph.width = 1
            // maskGraph.height = screenSize.height * 0.8
            // maskGraph.position.set((canvasWidth - gridContainer.width) / 2, (canvasHeight - gridContainer.height) / 2.4)
        }



    }, [screenSize, memorizedApp])

    useEffect(() => {
        if (memorizedApp) {
            if (isLoading) {
                makeReelsSpin(memorizedApp)
            }

        }

    }, [isLoading])

    // 🔥🔥🔥 DONTE REMOVE THIS 🔥🔥🔥
    // useEffect(() => {
    //     if (gameData) {
    //         const gameContainer = memorizedApp.stage.getChildAt(0) as Container<DisplayObject>;
    //         const gridContainer = gameContainer.getChildByName("gridContainer") as Container<DisplayObject>
    //         gameContainer.removeChild(gridContainer)
    //         const newGridContainer = createSpriteGrid(gameData)
    //         newGridContainer.name = "gridContainer"


    //         const canvasWidth = memorizedApp.view.width;
    //         const canvasHeight = memorizedApp.view.height;
    //         const gridWidth = screenSize.width * 0.7
    //         const gridHeight = screenSize.height * 0.7
    //         newGridContainer.width = gridWidth
    //         newGridContainer.height = gridHeight
    //         newGridContainer.position.set((canvasWidth - newGridContainer.width) / 2, (canvasHeight - newGridContainer.height) / 2.4)

    //         gameContainer.addChild(newGridContainer)

    //     }
    // }, [gameData])

    return <div style={{ height: "100%", width: "auto" }} ref={ref} />
}


function makeReelsSpin(app: Application<HTMLCanvasElement>) {
    let speed = 15;
    let gravity = 1
    let isGoingDown = false;

    const gameContainer = app.stage.getChildAt(0) as Container<DisplayObject>;
    const gridContainer = gameContainer.getChildByName("gridContainer") as Container<DisplayObject>;

    if (gridContainer) {

        app.ticker.add((delta) => {

            if (gridContainer.position.y > -50 && isGoingDown === false) {
                gravity += 2
                gridContainer.position.y -= (speed - gravity)
                if (gridContainer.position.y < -30) {
                    isGoingDown = true
                }

            } else {
                gridContainer.position.y += speed
            }
        })
    }
}

function createMask(width:number, height:number) {
    const mask = new Graphics();
    mask.name = "mask"
    mask.beginFill(0xffffff);
    mask.drawRect(0, 0, width, height);
    mask.endFill();
    return mask
}