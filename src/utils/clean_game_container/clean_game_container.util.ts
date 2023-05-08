import { Application } from "pixi.js";
import { findContainer } from "../find/find_container.util";

export async function cleanGameContainer(app: Application<HTMLCanvasElement>) {
    const gameContainer = findContainer(app, "gameContainer")
   
   const oldParticles =  gameContainer.children.filter(child => child.name === "particleContainer")
   console.log('old', oldParticles)
   oldParticles.forEach( particle => {
    particle.destroy()
   })
}