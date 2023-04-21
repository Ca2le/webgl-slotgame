import { Container } from "pixi.js"
import { ScreenSize } from "../../types/global.types"
import { store } from "../../store/store"

export function createContainer(name: string) {
    const { fullView } = store.getState().screenSize
    const container = new Container()
    container.name = name
    container.width = fullView.width
    container.height = fullView.height
    return container

}