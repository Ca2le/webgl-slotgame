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
    gridContainer.height = grid.height
    gridContainer.width = grid.width
    gridContainer.position.y = yPos
    gridContainer.position.x = xPos
    result.forEach((reel, x) => {
        const reelContainer = new Container()
        reelContainer.name = "reelContainer"
        reelContainer.height = grid.height
        reelContainer.width = symbol.fullSize
        reel.forEach((item, y) => {
            const spriteContainer = createSpriteContainer(x, y)
            const sprite = createSpriteSymbol(item)
            const border = createSpriteBorder()
            const radianceContainer = createRadianceContainer(item)
            const darknessContainer = createDarkGraph(symbol.fullSize, symbol.fullSize, 0, -1, "light")
            spriteContainer.addChild(darknessContainer)
            spriteContainer.addChild(sprite)
            spriteContainer.addChild(border)
            spriteContainer.addChild(radianceContainer)
            radianceContainer.visible = false
            reelContainer.addChild(spriteContainer)

        })
        gridContainer.addChild(reelContainer)
    })

    return gridContainer
}

function createSpriteContainer(x: number, y: number) {
    const { fullSize } = store.getState().screenSize.symbol
    const spriteContainer = new Container()
    const yPos = fullSize * y
    const xPos = fullSize * x
    spriteContainer.name = "spriteContainer"
    spriteContainer.height = fullSize
    spriteContainer.width = fullSize
    spriteContainer.sortableChildren = true
    spriteContainer.position.x = xPos
    spriteContainer.position.y = yPos
    spriteContainer.isMask = true

    return spriteContainer
}

function createSpriteSymbol(imgName: Value) {
    const { symbol } = store.getState().screenSize
    const margin = (symbol.fullSize - symbol.spriteSize) / 2
    const sprite = new Sprite(utils.TextureCache[`./assets/${imgName}.png`]);
    sprite.name = "sprite"
    sprite.alpha = 1
    sprite.zIndex = 2
    sprite.height = symbol.spriteSize
    sprite.width = symbol.spriteSize
    sprite.position.y = margin
    sprite.position.x = margin
    sprite.visible = true
    sprite.filters = [];

    return sprite
}

export function createSpriteBorder() {
    const { graphSize, fullSize } = store.getState().screenSize.symbol
    const border = new Graphics();
    border.height = graphSize
    border.width = graphSize
    const margin = (fullSize - graphSize) / 2
    border.name = "border"
    border.beginFill("blue");
    border.drawRect(margin, margin, graphSize, graphSize);
    border.endFill();
    border.zIndex = 1;
    border.visible = false

    return border
}

export function createRadianceContainer(imgName: string) {
    const { graphSize, fullSize } = store.getState().screenSize.symbol
    const radianceContainer = new Container()
    radianceContainer.name = "radianceContainer"
    radianceContainer.width = fullSize
    radianceContainer.height = fullSize
    const radiance = new Sprite(utils.TextureCache[`./assets/RADIANCE.png`])
    radiance.anchor.set(0.5)
    radiance.name = "radiance"
    const graphics = new Graphics()
    graphics.beginFill(0xFFFFFF)
    graphics.alpha = 0.3
    graphics.drawRect(0, 0, fullSize, fullSize)
    graphics.endFill()
    graphics.mask = radiance
    radianceContainer.addChild(graphics)
    radianceContainer.addChild(radiance)
    radiance.x = radianceContainer.width
    radiance.y = radianceContainer.height

    return radianceContainer
}

