import { Application, ParticleContainer } from "pixi.js"
import { findContainer } from "../find/find_container.util"
import { goldShower } from "./gold_shower.util"

export async function createGoldShower(app: Application<HTMLCanvasElement>) {
    const gameContainer = findContainer(app, "gameContainer")
    const shower1 = goldShower('right')
    const shower2 = goldShower('right')
    const shower3 = goldShower('left')
    const shower4 = goldShower('left')

    gameContainer.addChild(shower1)
    gameContainer.addChild(shower3)
    await setTimeout((() => {
        gameContainer.addChild(shower2)
        gameContainer.addChild(shower4)
    }), 100)

}