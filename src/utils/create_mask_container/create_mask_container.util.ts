import { Container, Graphics } from "pixi.js";
import { store } from "../../store/store";

export function createMaskContainer() {
    const { max } = store.getState().screenSize
    const maskGraph = createMask()
    const maskContainer = new Container()
    maskContainer.height = max.height
    maskContainer.width = max.width
    maskContainer.name = "maskContainer"
    maskContainer.mask = maskGraph

    return maskContainer
}

function createMask() {
    const { max, mask } = store.getState().screenSize
    const y = (max.height - mask.height) / 2
    const x = (max.width - mask.width) / 2
    const graph = new Graphics();
    graph.height = mask.height
    graph.width = mask.width
    graph.name = "maskGraph"
    graph.beginFill("red");
    graph.drawRect(x, y, mask.width, mask.height);
    graph.endFill();

    return graph
}