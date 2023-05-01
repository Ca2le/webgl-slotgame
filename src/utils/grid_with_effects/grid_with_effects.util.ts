import { Application } from "pixi.js";
import { store } from "../../store/store";
import { Result } from "../../types/global.types";
import { findContainer } from "../find/find_container.util";
import { createGridContainer } from "../create_grid_container/create_grid_container.util";

export function replaceOldGrid(app: Application<HTMLCanvasElement>, memoGameData: Result) {
    const { grid } = store.getState().game
    const maskContainer = findContainer(app, "maskContainer")
    const oldGridContainer = findContainer(app, "gridContainer")
    const newGridContainer = createGridContainer(memoGameData)
    maskContainer.addChild(newGridContainer)
    maskContainer.removeChildAt(0)
 
    return newGridContainer
}