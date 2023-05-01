import { Container, DisplayObject, Graphics, Sprite, Ticker } from "pixi.js"
import { store } from "../../store/store"
import { GlowFilter } from "@pixi/filter-glow"

// export function addLightEffects(newGridContainer: Container<DisplayObject>) {
//     const { filterdPayLine } = store.getState().game

//     const grid = newGridContainer.children
//     const payLine1 = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
//     const glow = new GlowFilter()
//     const allWinninglines:Container<DisplayObject>[][] = []
//     if (filterdPayLine.length > 0) {
//         filterdPayLine.forEach((payline, index) => {
//             const paylineList: Container<DisplayObject>[] = []
//             payline.forEach((cords, i) => {
//                 const x = cords[0]
//                 const y = cords[1]
//                 const reel = grid[x] as Container<DisplayObject>
//                 const symbol = reel.children[y] as Container<DisplayObject>
//                 const graph = symbol.getChildByName("border") as DisplayObject
//                 const sprite = symbol.getChildByName("sprite") as Sprite
//                 const radiance = symbol.getChildByName("radianceContainer") as Sprite
//                 radiance.visible = true
//                 sprite.filters = [glow]
//                 graph.visible = false
//                 paylineList.push(symbol)
//             })
//             allWinninglines.push(paylineList)
//         })
//     }
//     return allWinninglines
// }

export function lightEffects(pl: number[][], newGridContainer: Container<DisplayObject>, input: "add" | "remove") {
    const grid = newGridContainer.children
    const glow = new GlowFilter()

    const payline: Container<DisplayObject>[] = []
    pl.forEach((cords: number[], i) => {
        const x = cords[0]
        const y = cords[1]
        const reel = grid[x] as Container<DisplayObject>
        const symbol = reel.children[y] as Container<DisplayObject>
        const graph = symbol.getChildByName("border") as DisplayObject
        const sprite = symbol.getChildByName("sprite") as Sprite
        const radiance = symbol.getChildByName("radianceContainer") as Sprite
        // const darkness = symbol.getChildByName("darknessContainer") as Container<DisplayObject>
        const darkness = symbol.getChildByName("darkness") as Graphics
        if (input === "add") {
            darkness.zIndex = 0
            radiance.visible = true
            sprite.filters = [glow]
            graph.visible = false
            symbol.sortDirty
        } else {
            radiance.visible = false
            sprite.filters = []
            graph.visible = false
        }

        payline.push(symbol)
    })
    return payline
}
