import { Application, Container, DisplayObject, Graphics } from "pixi.js";

export function findContainer(app: Application<HTMLCanvasElement>, input: string) {
    const gameContainer = app.stage.getChildByName('gameContainer') as Container<DisplayObject>;
    const maskContainer = gameContainer.getChildByName('maskContainer') as Container<DisplayObject>
    const shadowContainer = gameContainer.getChildByName('darkness') as Graphics
    const gridContainer = maskContainer.getChildByName('gridContainer') as Container<DisplayObject>


    const containers = [gameContainer, maskContainer, shadowContainer, gridContainer]

    const container = containers.filter(container => container.name === input)
    if (container.length > 1 || container.length === 0) {
        console.error(new Error('Your input found more then two or zero containers. not allowed... '), containers)
        return container[0]
    } else return container[0]
}