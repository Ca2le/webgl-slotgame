import { Container, Graphics, Sprite, utils } from "pixi.js";
import { Result, Value } from "../../types/global.types";
import { store } from "../../store/store";

import { createDarkGraph } from "../../components/game_canvas/game_canvas.component";

export function createGridContainer(result: Result) {
    const { symbol, grid, gameContainer, mask } = store.getState().screenSize
    const xPos = (gameContainer.width - grid.width) / 2
    const yPos = -grid.height + (symbol.fullSize + mask.height)
    const gridContainer = new Container()
    gridContainer.name = 'gridContainer'
    gridContainer.position.y = yPos
    gridContainer.position.x = xPos

    result.forEach((reel, x) => {
        const reelContainer = new Container()
        reelContainer.name = "reelContainer"
        reel.forEach((item, y) => {
            const spriteContainer = createSpriteContainer(x, y)
            const sprite = createSpriteSymbol(item)
            const border = createSpriteBorder("red")
            const radianceContainer = createRadianceContainer(item)
            const darknessContainer = createDarkGraph(symbol.fullSize, symbol.fullSize, 0, -1, "light")
            spriteContainer.addChild(darknessContainer)
            spriteContainer.addChild(sprite)
            spriteContainer.addChild(border)
            spriteContainer.addChild(radianceContainer)
            reelContainer.addChild(spriteContainer)
            spriteContainer.position.set(x * symbol.fullSize, y * symbol.fullSize)
            // const spriteLeftMargin = (spriteContainer.width - sprite.width) / 2

            sprite.height = symbol.spriteSize
            sprite.width = symbol.spriteSize
            sprite.position.y = (spriteContainer.height - sprite.height) / 2
            sprite.position.x = (spriteContainer.width - sprite.width) / 2


        })
        gridContainer.addChild(reelContainer)

    })
    gridContainer.height = grid.height
    return gridContainer
}

function createSpriteContainer(x: number, y: number) {
    const { fullSize } = store.getState().screenSize.symbol
    const spriteContainer = new Container()
    spriteContainer.name = "spriteContainer"
    spriteContainer.sortableChildren = true

    return spriteContainer
}

function createSpriteSymbol(imgName: Value) {
    const sprite = new Sprite(utils.TextureCache[`./assets/${imgName}.png`]);
    sprite.name = "sprite"
    sprite.alpha = 1
    sprite.zIndex = 2
    sprite.visible = true
    sprite.filters = [];
    return sprite
}

export function createSpriteBorder(colorCode: string) {
    const { graphSize, fullSize } = store.getState().screenSize.symbol
    const border = new Graphics();
    const size = graphSize * 0.96
    const margin = (fullSize - size) / 2
    border.name = "border"
    border.beginFill(colorCode);
    border.drawRect(margin, margin, size, size);
    border.endFill();
    border.zIndex = 1;
    border.visible = false

    return border
}

export function createRadianceContainer(imgName: string) {
    const { graphSize, fullSize } = store.getState().screenSize.symbol

    const radianceContainer = new Container()
    radianceContainer.name = "radianceContainer"
    radianceContainer.isMask = true

    const radiance = new Sprite(utils.TextureCache[`./assets/RADIANCE.png`])
    radiance.name = "radiance"
    radiance.width = fullSize
    radiance.height = fullSize
    radiance.anchor.set(0.5, 0.5)

    const graphics = new Graphics()
    graphics.beginFill(0xFFFFFF)
    graphics.drawRect(0, 0, fullSize, fullSize)
    graphics.endFill()
    graphics.alpha = 0.5

    radianceContainer.mask = radiance
    radianceContainer.addChild(radiance)
    radianceContainer.addChild(graphics)
    radianceContainer.visible = false

    radiance.position.set(radianceContainer.width / 2, radianceContainer.height / 2)

    return radianceContainer
}

