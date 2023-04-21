import { Container, DisplayObject, Sprite, utils } from "pixi.js";
import { Result, ScreenSize, SpriteGrid } from "../../types/global.types";
import { generateResult } from "../../network/slot_simulator";
import { store } from "../../store/store";


// export function createGrid({ fullView, symbolSize }: ScreenSize, grid: Result) {


//     const leftMargin = (fullView.width - (symbolSize.width * 5)) / 2
//     const gridContainer = new Container()
//     const bottom = (((symbolSize.height * 3) + (symbolSize.height * 0.5)) - (symbolSize.height * 8))

//     gridContainer.name = 'gridContainer'
//     grid.forEach((reel, i) => {
//         const reelContainer = new Container()
//         reel.forEach((item, index) => {
//             const y = (index * symbolSize.height);
//             const x = i * symbolSize.height;
//             const sprite = new Sprite(utils.TextureCache[`/src/assets/${item}.png`]);
//             sprite.scale.set(0.9)
//             sprite.position.set(x, y)
//             reelContainer.addChild(sprite)
//         })
//         gridContainer.addChild(reelContainer)
//     })
//     gridContainer.position.set(leftMargin, bottom)

//     return gridContainer

// }


export function createGridContainer(grid: Result) {
    const { fullView, symbolSize } = store.getState().screenSize
    const leftMargin = (fullView.width - (symbolSize.width * 5)) / 2
    const gridContainer = new Container()
    const bottom = (((symbolSize.height * 3) + (symbolSize.height * 0.5)) - (symbolSize.height * 19))
    gridContainer.height = symbolSize.height * 19
    gridContainer.name = 'gridContainer'
    grid.forEach((reel, i) => {
        const reelContainer = new Container()
        reel.forEach((item, index) => {
            const y = (index * symbolSize.height);
            const x = i * symbolSize.height;
            const sprite = new Sprite(utils.TextureCache[`/src/assets/${item}.png`]);
            sprite.scale.set(0.9)
            sprite.position.set(x, y)
            reelContainer.addChild(sprite)

        })
        gridContainer.height = symbolSize.height * 19
        gridContainer.addChild(reelContainer)
    })
    gridContainer.position.set(leftMargin, bottom)
    console.log(gridContainer.position.y)
    return gridContainer

}