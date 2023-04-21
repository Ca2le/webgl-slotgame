import { Graphics } from "pixi.js";
import { store } from "../../store/store";

export function createMask() {
    const { fullView, symbolSize } = store.getState().screenSize
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