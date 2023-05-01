import { Application } from "pixi.js";
import { findContainer } from "../find/find_container.util";

export function BG_darknesEffect(app: Application<HTMLCanvasElement>, input: boolean) {
    
    const shadowContainer = findContainer(app, "darkness")
    
    if(input){
        shadowContainer.alpha = 0.7
    } else {
        shadowContainer.alpha = 0
    }
}