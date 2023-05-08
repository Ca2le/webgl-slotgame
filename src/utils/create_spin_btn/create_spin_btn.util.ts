import { Container } from "pixi.js";
import { createSprite } from "../create_sprite/create_sprite.util";
import { store } from "../../store/store";
import { GlowFilter } from "@pixi/filter-glow";

const { gameContainer, UI_, symbol } = store.getState().screenSize
const quaterSize = symbol.fullSize * 0.25
const halfSize = symbol.fullSize * 0.5
const oneSize = symbol.fullSize


export function createSpinBtn() {
    const container = new Container()
    const glowOptions = { color: 0xffffff }
    const glow = new GlowFilter(glowOptions)
    
    const ironSprite = createSprite("IRONFRAME")
    const glassSprite = createSprite("GLASS")
    const lavaSprite = createSprite("LAVA")
    container.filters = [glow]
    glow.enabled = false
    container.sortableChildren = true
    ironSprite.zIndex = 3
    glassSprite.zIndex = 2
    lavaSprite.zIndex = 1
    container.addChild(ironSprite, glassSprite, lavaSprite)
    glassSprite.y = (ironSprite.height - glassSprite.height) / 2
    glassSprite.x = (ironSprite.width - glassSprite.width) / 2
    lavaSprite.y = (ironSprite.height - lavaSprite.height) / 2
    lavaSprite.x = (ironSprite.width - lavaSprite.width) / 2
    return container
}