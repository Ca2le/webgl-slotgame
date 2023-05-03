import { Container, Text, TextStyle, Ticker } from "pixi.js";
import { createDarkGraph } from "../components/game_canvas/game_canvas.component";
import { store } from "../store/store";
import { createSprite } from "./create_sprite/create_sprite.util";
import { GlowFilter } from "@pixi/filter-glow";
const { max, symbol } = store.getState().screenSize



export function  createBobsMsgContainer() {
    const headerStyle = new TextStyle({
        fontFamily: ['Sigmar', 'cursive'],
        fontSize: 0.25 * symbol.fullSize,
        fontWeight: '300',
        fill: '#FFFFFF',
        dropShadow: true,
        dropShadowBlur: 3,
        dropShadowDistance: 2,
    })
    
    const paylineHeader = new TextStyle({
        fontFamily: ['Open Sans', 'cursive'],
        fontSize: 0.20 * symbol.fullSize,
        fontWeight: '300',
        fill: '#FFFFFF',
        dropShadow: true,
        dropShadowBlur: 3,
        dropShadowDistance: 2,
    })

    const bobsContainer = new Container()
    bobsContainer.name = "bobsContainer"
    bobsContainer.height = max.height
    bobsContainer.width = max.width

    const graph = createDarkGraph(max.height, max.width, 0.90, 5, "dark")
    bobsContainer.addChild(graph)

    const firstMsg = new Text("BOB'S BLACKSMITH", headerStyle);
    bobsContainer.addChild(firstMsg)
    firstMsg.x = (bobsContainer.width - firstMsg.width) / 2
    firstMsg.y = symbol.spriteSize / 2


    const secondMsg = new Text("VIDEOSLOTS", headerStyle);
    bobsContainer.addChild(secondMsg)
    secondMsg.x = (bobsContainer.width - secondMsg.width) / 2
    secondMsg.y = symbol.spriteSize / 2 + firstMsg.height

    const paylineH = new Text("Paylines", paylineHeader);
    bobsContainer.addChild(paylineH)
    paylineH.x = (bobsContainer.width - paylineH.width) / 2
    paylineH.y = (bobsContainer.height - paylineH.height) / 3.4

    const paylines = createSprite("PAYLINES")
    bobsContainer.addChild(paylines)
    paylines.x = (bobsContainer.width - paylines.width) / 2
    paylines.y = (bobsContainer.height - paylines.height) / 1.5


    const glow = new GlowFilter()
    glow.enabled = false
    const hammer = createSprite("HAMMER")
    bobsContainer.addChild(hammer)
    hammer.anchor.set(0.5)
    hammer.interactive = true
    hammer.filters = [glow]

    hammer.x = 6 * symbol.fullSize
    hammer.y = 1 * symbol.fullSize
    hammer.on("click", () => {
        bobsContainer.destroy()
    })

    hammer.on('mouseover', () => {
        glow.enabled = true
        hammer.scale.set(1.1)
    })
    hammer.on('mouseout', () => {
        glow.enabled = false
        hammer.scale.set(1)
    })


    return bobsContainer
}

