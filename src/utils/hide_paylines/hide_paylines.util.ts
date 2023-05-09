import { Application } from "pixi.js";
import { findContainer } from "../find/find_container.util";

export function hidePaylines(app: Application<HTMLCanvasElement>) {
    const paylineContainer = findContainer(app, "paylineContainer")
    paylineContainer.children.forEach(child => {
        if (child.name === "line") {
            child.visible = false
        }
    })
}