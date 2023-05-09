import { Container, Graphics } from "pixi.js";
import { store } from "../../store/store";

export function createMaskContainer() {
    const { gameContainer } = store.getState().screenSize
    const maskGraph = createMask()
    const maskContainer = new Container()
    maskContainer.height = gameContainer.height
    maskContainer.width = gameContainer.width
    maskContainer.name = "maskContainer"
    maskContainer.addChild(maskGraph)
    maskContainer.mask = maskGraph
   maskContainer.zIndex = 1
    return maskContainer
}

function createMask() {
    const { gameContainer, mask } = store.getState().screenSize
    const y = (gameContainer.height - mask.height) / 2
    const x = (gameContainer.width - mask.width) / 2
    const graph = new Graphics();
    graph.height = mask.height
    graph.width = mask.width
    graph.name = "maskGraph"
    graph.beginFill("red");
    graph.drawRect(x, y, mask.width, mask.height);
    graph.endFill();

    return graph
}