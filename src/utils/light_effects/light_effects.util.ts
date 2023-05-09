import { Container, DisplayObject, Graphics, Sprite, Ticker } from "pixi.js"
import { store } from "../../store/store"
import { GlowFilter } from "@pixi/filter-glow"
import { createSpriteBorder } from "../create_grid_container/create_grid_container.util"
import { colorCode } from "../../const/const"


export function lightEffects(pl: number[][], newGridContainer: Container<DisplayObject>, payLineNumber: number[], input: "add" | "remove") {

    const grid = newGridContainer.children
    const glow = new GlowFilter()
    

    const payline: Container<DisplayObject>[] = []
    pl.forEach((cords: number[], i) => {
        console.log('Index', i)
        const x = cords[0]
        const y = cords[1]
        const reel = grid[x] as Container<DisplayObject>
        const symbol = reel.children[y] as Container<DisplayObject>
        const graph = symbol.getChildByName("border") as DisplayObject
        const sprite = symbol.getChildByName("sprite") as Sprite
        const radiance = symbol.getChildByName("radianceContainer") as Sprite

        const darkness = symbol.getChildByName("darkness") as Graphics
        const currPaylineNr = payLineNumber[i]
        // const spriteBorder = createSpriteBorder(colorCode[currPaylineNr])
        // graph.destroy()
        // symbol.addChild(spriteBorder)
        // const darkness = symbol.getChildByName("darknessContainer") as Container<DisplayObject>

        if (input === "add") {
            darkness.zIndex = 0
            radiance.visible = true
            sprite.filters = [glow]
            // spriteBorder.visible = true
            symbol.sortDirty
        } else {
            radiance.visible = false
            sprite.filters = []
            // spriteBorder.visible = false
        }

        payline.push(symbol)
    })
    return payline
}
