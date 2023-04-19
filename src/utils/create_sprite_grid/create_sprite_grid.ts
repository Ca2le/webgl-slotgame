import { Container, DisplayObject, Sprite, utils } from "pixi.js";
import { Result, SpriteGrid } from "../../types/global.types";

export function createSpriteGrid(result: Result) {
    const gridContainer = new Container()
    gridContainer.name = 'spriteContainer'
    result.forEach((reel, i) => {
        const reelContainer = new Container()
        reel.forEach((item, index) => {
            const y = index * 100;
            const x = i * 100;
            const sprite = new Sprite(utils.TextureCache[`/src/assets/${item}.png`]);
            sprite.scale.set(0.9)
            sprite.position.set(x, y)
            reelContainer.addChild(sprite)
        })
        gridContainer.addChild(reelContainer)
    })

    return gridContainer

}