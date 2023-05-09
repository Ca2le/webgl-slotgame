import { Application } from "pixi.js";
import { findContainer } from "../find/find_container.util";

export function showPaylines(app: Application<HTMLCanvasElement>, winningPL?: number[], singlePL?: number) {
    const paylineContainer = findContainer(app, "paylineContainer")
    if (winningPL && winningPL.length > 0) {
        winningPL.forEach(payline => {
            // - 1 becouse there is no payline 0
            const index = payline - 1
            paylineContainer.children[index].visible = true
        })
    }

}