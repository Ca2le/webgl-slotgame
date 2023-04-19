import { Container, DisplayObject, Sprite, utils } from "pixi.js";
import { Result, SpriteGrid } from "../../types/global.types";

interface View {
    height: number,
    width: number
}
export function createGrid(fullView: View, result: Result, symbolSize: View) {
    const leftMargin = (fullView.width - (symbolSize.width * 5)) / 2
    const gridContainer = new Container()
    const bottom = (((symbolSize.height * 3) + (symbolSize.height * 0.5)) - (symbolSize.height * 8))

    gridContainer.name = 'gridContainer'
    result.forEach((reel, i) => {
        const reelContainer = new Container()
        reel.forEach((item, index) => {
            const y = (index * symbolSize.height);
            const x = i * symbolSize.height;
            const sprite = new Sprite(utils.TextureCache[`/src/assets/${item}.png`]);
            sprite.scale.set(0.9)
            sprite.position.set(x, y)
            reelContainer.addChild(sprite)
        })
        gridContainer.addChild(reelContainer)
    })
    gridContainer.position.set(leftMargin, bottom)

    return gridContainer

}