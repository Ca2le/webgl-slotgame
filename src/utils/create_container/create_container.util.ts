import { Container } from "pixi.js"
import { ScreenSize } from "../../types/global.types"
import { store } from "../../store/store"

export function createGameContainer() {
    const { max } = store.getState().screenSize
    const container = new Container()
    container.name = "gameContainer"
    container.width = max.width
    container.height = max.height
    container.sortableChildren = true
    return container

}