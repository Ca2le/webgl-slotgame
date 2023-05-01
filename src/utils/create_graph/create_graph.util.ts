import { Graphics } from "pixi.js";
import { store } from "../../store/store";


export function createGraphFrame(x: number, y: number, color = "blue") {
    const { symbol } = store.getState().screenSize
    const graph = new Graphics();
    const margin = (symbol.fullSize - symbol.graphSize) / 2
    const xPos = margin + (x * symbol.graphSize)
    const yPos = margin + (y * symbol.graphSize)
    graph.name = "frame"
    graph.beginFill(color);
    graph.drawRect(xPos, yPos, symbol.graphSize, symbol.graphSize);
    graph.endFill();
    graph.zIndex = 1;
    return graph
}