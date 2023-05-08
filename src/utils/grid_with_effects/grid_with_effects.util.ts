import { Application, Graphics } from "pixi.js";
import { store } from "../../store/store";
import { Result } from "../../types/global.types";
import { findContainer } from "../find/find_container.util";
import { createGridContainer } from "../create_grid_container/create_grid_container.util";

export function replaceOldGrid(app: Application<HTMLCanvasElement>, memoGameData: Result) {

    const { game, screenSize } = store.getState()
    const maskContainer = findContainer(app, "maskContainer")
    const grap = maskContainer.getChildByName("maskGraph") as Graphics
    const newGridContainer = createGridContainer(memoGameData)
    grap.height = 3* screenSize.symbol.fullSize
    
    maskContainer.name = "maskContainer"

    maskContainer.getChildByName("gridContainer")?.destroy()
    maskContainer.addChild(newGridContainer)
    return newGridContainer
}