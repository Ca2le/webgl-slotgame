import { Application, Container, DisplayObject, Graphics, MaskData } from "pixi.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Result, ScreenSize } from "../../types/global.types";
import { useData } from "../../network/useFetchData";
import { createGrid } from "../../utils/create_sprite_grid/create_sprite_grid";
import { createGameInterface } from "../../utils/create_game_interface/create_game_interface";
import { spriteList } from "../../const/const";

interface GameCanvasProps {
    screenSize: ScreenSize
}
interface Size {
    readonly width: number,
    readonly height: number
}

export function GameCanvas({ screenSize }: GameCanvasProps) {
    const { fullView, maskSize, gridSize, UI_Size, symbolSize } = screenSize

    const { gameData, fetchNewData, isLoading } = useData()
    const memoFetch = useCallback(() => {
        return fetchNewData();
    }, [fetchNewData]);
    console.log(isLoading)
    const ref = useRef<HTMLDivElement>(null)

    const createContent = () => {
        const initialResult = [
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "K"],
            ["K", "K", "K", "K", "K", "K", "K", "WILD"],
            ["K", "K", "K", "K", "K", "K", "K", "K"]
        ] as Result

        const gameContainer = createContainer(fullView.height, fullView.width, "gameContainer")
        const UIContainer = createGameInterface(memoFetch)
        const maskContainer = createContainer(fullView.width, gridSize.height, "maskContainer")
        const maskGraph = createMask(gridSize, symbolSize, fullView)
        const gridContainer = createGrid(fullView, initialResult, symbolSize)
        maskContainer.mask = maskGraph
        // console.log(maskGraph)
        gameContainer.addChild(maskContainer)
        gameContainer.addChild(UIContainer)
        maskContainer.addChild(gridContainer)
        // console.log(maskContainer)
        return gameContainer
    }

    const memorizedApp = useMemo(() => {
        const app = new Application<HTMLCanvasElement>({ width: fullView.width, height: fullView.height, backgroundAlpha: 0.2 })
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
            if (isLoading) {
                makeReelsSpin(memorizedApp, fullView)
            }
        }
    }, [isLoading])

    return <div style={{ height: "100%", width: "auto" }} ref={ref} />
}

function makeReelsSpin(app: Application<HTMLCanvasElement>, fullView: { width: number, height: number }) {
    
    let speed = 17;
    let gravity = 1
    let isGoingDown = false;

    const gameContainer = app.stage.getChildAt(0) as Container<DisplayObject>;
    const maskContainer = gameContainer.getChildByName("maskContainer") as Container<DisplayObject>;
    const gridContainer = maskContainer.getChildByName("gridContainer") as Container<DisplayObject>;
    let shouldLoop = fullView.height
    console.log()
    if (gridContainer) {

        app.ticker.add((delta) => {
            if (gridContainer.position.y > -50 && isGoingDown === false) {
                gravity += 2
                gridContainer.position.y -= (speed - gravity)
                if (gridContainer.position.y < -50) {
                    isGoingDown = true
                }

            } else {
                gridContainer.position.y += speed * delta
                if (gridContainer.position.y > shouldLoop) {
                    gridContainer.position.y = -1185
                }
            }
        })
    }
}

function createMask(gridSize: Size, symbolSize: Size, fullView: Size) {
    // const leftMargin = (fullView.width - (symbolSize.width * 5)) / 2
    const maskHeight = symbolSize.height * 3
    const heightMargin = (fullView.height - maskHeight) / 2

    // const heightMargin = viewSize.height / 6
    const graph = new Graphics();
    graph.name = "maskGraph"
    graph.beginFill(0xffffff);
    graph.drawRect(0, heightMargin, fullView.width, maskHeight);
    graph.endFill();
    return graph
}

function createContainer(height: number, width: number, name: string) {
    const container = new Container()
    container.name = name
    container.width = width
    container.height = height
    return container

}