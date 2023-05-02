import { Container, Geometry, Graphics, Rectangle, Sprite, Text, TextStyle, utils } from "pixi.js";
import { Assets } from "../../types/global.types";
import { store } from "../../store/store";
import { GlowFilter } from "@pixi/filter-glow";
import { GameStatus } from "../../network/slot_simulator";
import { gameController } from "../game_controller/game_controller.util";
const { max, UI_, symbol } = store.getState().screenSize


export function createCenterSprite(imgIcon: Assets) {
  const width = symbol.fullSize * 3
  const glowOptions = { color: 0xffffff }
  const glow = new GlowFilter(glowOptions)
  glow.enabled = false
  const sprite = new Sprite(utils.TextureCache[`./assets/${imgIcon}.png`]);
  sprite.name = imgIcon
  sprite.eventMode = "static"
  sprite.alpha = 1;
  sprite.filters = [glow]
  sprite.height = UI_.height
  sprite.width = width
  return sprite
}

export const textStyle = new TextStyle({
  fontFamily: ['Sigmar', 'Arial', 'sans-serif'],
  fontSize: symbol.fullSize * 0.15,
  fontWeight: '400',
  fill: '#FFFFFF',
  dropShadow: true,
  dropShadowBlur: 3,
  dropShadowDistance: 2,
})

export function addHitArea(imgIcon: Assets, sprite: Sprite, fetchNewData: (bet?: number) => Promise<GameStatus | undefined>) {
  const oneSquare = symbol.fullSize
  const hitContainer = new Container()
  hitContainer.name = `${imgIcon}_hitarea`
  //@ts-ignore
  const glowFilter = sprite.filters[0] as GlowFilter
  const hitArea = new Graphics()
  hitArea.name = "hitarea"
  hitArea.beginFill(0xff0000);
  hitArea.drawRect(0, 0, (oneSquare * 0.5), (oneSquare * 0.5));
  hitArea.endFill();
  hitArea.interactive = true;
  hitArea.alpha = 0

  if (imgIcon === "ANVIL_1") {
    const y = oneSquare * 0.2
    const x = oneSquare * 0.5
    hitArea.position.x = x
    hitArea.position.y = y
    const autotxt = new Text("AUTO", textStyle);
    const bettxt = new Text("BET", textStyle);
    const autoMargin = (hitArea.width - autotxt.width) / 2
    const betMargin = (hitArea.width - bettxt.width) / 2
    autotxt.x = x + autoMargin
    autotxt.y = y
    bettxt.x = x + betMargin
    bettxt.y = y + (autotxt.height * 0.8)
    hitContainer.addChild(autotxt)
    hitContainer.addChild(bettxt)

    hitArea.on('click', () => {
      store.dispatch({ type: "SET_AMOUNT_OF_BETS", bets: 5 })
    })
    hitArea.on('tap', () => {
      store.dispatch({ type: "SET_AMOUNT_OF_BETS", bets: 5 })
    })

  }
  if (imgIcon === "ANVIL_2") {
    const y = oneSquare * 0.2
    const x = oneSquare * 1.4
    hitArea.position.x = x
    hitArea.position.y = y
    const spintxt = new Text("SPIN", textStyle);
    const spinMargin = (hitArea.width - spintxt.width) / 2
    spintxt.x = x + spinMargin
    spintxt.y = y
    hitContainer.addChild(spintxt)

    hitArea.on('click', () => {
      gameController(fetchNewData)
    })
    hitArea.on('tap', () => {
      gameController(fetchNewData)
    })


  }
  if (imgIcon === "SHIELD") {
    const y = oneSquare * 0.3
    const x = oneSquare * 2.3
    hitArea.position.x = x
    hitArea.position.y = y
    const bettxt = new Text("BET", textStyle);
    const maxtxt = new Text("MAX", textStyle);
    const betMargin = (hitArea.width - bettxt.width) / 2
    const maxMargin = (hitArea.width - maxtxt.width) / 2
    bettxt.x = x + betMargin
    bettxt.y = y
    maxtxt.x = x + maxMargin
    maxtxt.y = y + (bettxt.height * 0.8)
    hitContainer.addChild(bettxt)
    hitContainer.addChild(maxtxt)

    hitArea.on('click', () => {
      glowFilter.enabled = false
      gameController(fetchNewData, "INCREMENT_BET")
    })
    hitArea.on('tap', () => {
      glowFilter.enabled = false
      gameController(fetchNewData, "INCREMENT_BET")
    })

  }

  hitArea.on('mouseover', () => {
    glowFilter.enabled = true
  })
  hitArea.on('mouseout', () => {
    glowFilter.enabled = false
  })


  hitContainer.addChild(hitArea)
  return hitContainer
}

// button.on('mouseout', () => {
//   
// })