import { Graphics, Sprite, Container } from "pixi.js";

export function centerThis(centerdElement: Sprite | Graphics | Container, element: Sprite | Graphics | Container) {
    const fullWidth = element.width
    const fullheight = element.height
    const height = centerdElement.height
    const width = centerdElement.width
    const y = (fullheight - height) / 2
    const x = (fullWidth - width) / 2
    const pos = { x, y }
    return pos
}