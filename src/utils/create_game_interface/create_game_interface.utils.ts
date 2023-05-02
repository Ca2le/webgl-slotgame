import { Application, Container } from "pixi.js";
import { GameStatus } from "../../network/slot_simulator";
import { addHitArea, createCenterSprite } from "../create_button/create_button.util";
import { store } from "../../store/store";
import { createSprite } from "../create_sprite/create_sprite.util";
import { createText } from "../create_text/create_text.util";
import { createBtn } from "../create_btn_hitpoint/create_btn_hitpoint.util";
const { bet } = store.getState().gameEconomy
const { max, UI_, symbol } = store.getState().screenSize
const quaterSize = symbol.fullSize * 0.25
const halfSize = symbol.fullSize * 0.5
const oneSize = symbol.fullSize
const twoSize = symbol.fullSize * 2
const threeSize = symbol.fullSize * 3
const fourSize = symbol.fullSize * 4

export function createUI(fetchNewData: () => Promise<GameStatus | undefined>, app: Application<HTMLCanvasElement>) {

    const yPos = max.height - UI_.height
    const UIContainer = createUIContainer("UIContainer", UI_.width, yPos)
    UIContainer.width = UI_.width
    const leftContainer = createUILeftContainer()
    const centerContainer = createUICenterContainer(fetchNewData)
    const rightContainer = createUIRightContainer()
    centerContainer.position.x = oneSize + quaterSize + halfSize
    rightContainer.position.x = fourSize + quaterSize
    UIContainer.addChild(leftContainer)
    UIContainer.addChild(centerContainer)
    UIContainer.addChild(rightContainer)

    return UIContainer
}

export function createUIContainer(name: string, width = symbol.fullSize, y = 0) {
    const container = new Container()
    container.name = name
    container.width = width
    container.height = UI_.height 
    container.position.y = y
    return container

}

export function createUICenterContainer(fetchNewData: () => Promise<GameStatus | undefined>) {
    const centerContainer = createUIContainer("centerContainer", threeSize)
    const autoSprite = createCenterSprite("ANVIL_1");
    const spinSprite = createCenterSprite("ANVIL_2");
    const maxBetSprite = createCenterSprite("SHIELD");
    const autoHitArea = addHitArea("ANVIL_1", autoSprite, fetchNewData)
    const spinHitArea = addHitArea("ANVIL_2", spinSprite, fetchNewData)
    const maxBetHitArea = addHitArea("SHIELD", maxBetSprite, fetchNewData)
    centerContainer.addChild(autoSprite)
    centerContainer.addChild(spinSprite)
    centerContainer.addChild(maxBetSprite)
    centerContainer.addChild(autoHitArea)
    centerContainer.addChild(spinHitArea)
    centerContainer.addChild(maxBetHitArea)
    return centerContainer

}

export function createUILeftContainer() {
    const quaterSize = symbol.fullSize * 0.25
    const halfSize = symbol.fullSize * 0.5
    const oneSize = symbol.fullSize
    const twoSize = symbol.fullSize * 2
    const threeSize = symbol.fullSize * 3
    const fourSize = symbol.fullSize * 4

    const leftContainer = createUIContainer("leftContainer", twoSize)
    const settingsContainer = createUIContainer("settingsContainer", oneSize)
    const settings = createSprite("SETTINGSDISPLAY", oneSize, oneSize)
    settingsContainer.addChild(settings)
    const displayContainer = createUIContainer("displayContainer", oneSize)
    const betDisplay = createSprite("DISPLAY", oneSize, oneSize)
    const decBtn = createBtn("DECREMENT", "DECREMENT_BET")
    const incBtn = createBtn("INCREMENT", "INCREMENT_BET")
    const betTxt = createText("BET", "header");
    const amounTxt = createText(bet, "text");
    const halfDisplay = betDisplay.width / 2
    const btnX = (halfDisplay - decBtn.width) / 2
    const btnY = (betDisplay.height - decBtn.height) / 1.8
    const betY = (betDisplay.height - betTxt.height) / 2.8
    const betX = (betDisplay.width - betTxt.width) / 2
    const amountY = (betDisplay.height - amounTxt.height) / 1.8
    const amountX = (betDisplay.width - amounTxt.width) / 2
    displayContainer.addChild(betDisplay)
    displayContainer.addChild(decBtn)
    displayContainer.addChild(betTxt)
    displayContainer.addChild(amounTxt)
    displayContainer.addChild(incBtn)
    betTxt.y = betY
    betTxt.x = betX
    amounTxt.y = amountY
    amounTxt.x = amountX
    decBtn.position.y = btnY
    decBtn.position.x = btnX
    incBtn.position.y = btnY
    incBtn.position.x = btnX + halfDisplay
    incBtn.interactive = true
    displayContainer.position.x = oneSize
    settings.position.x = quaterSize

    leftContainer.addChild(settingsContainer)
    leftContainer.addChild(displayContainer)

    return leftContainer

}

// itArea.on('click', () => {
//     glowFilter.enabled = false
//     if (fetchNewData) {
//       handleTap(fetchNewData)
//     }

//   })

export function createUIRightContainer() {
    const { coins, coinValue } = store.getState().gameEconomy
    const btnSize = oneSize * 0.16
    const rightContainer = createUIContainer("rightContainer", twoSize + (oneSize / 2))

    // display 1
    const coinValueContainer = createUIContainer("displayContainer", oneSize)
    const coinValueDisplay = createSprite("DISPLAY", oneSize, oneSize)
    const decBtn = createBtn("DECREMENT", "DECREMENT_COINVALUE")
    const incBtn = createBtn("INCREMENT", "INCREMENT_COINVALUE")
    const coinValueTxt = createText("COIN VALUE", "header");
    const amountTxt = createText(`${coinValue.value}X`, "text");

    const halfDisplay = coinValueDisplay.width / 2
    const btnX = (halfDisplay - decBtn.width) / 2
    const btnY = (coinValueDisplay.height - decBtn.height) / 1.8
    const coinValueY = (coinValueDisplay.height - coinValueTxt.height) / 2.8
    const coinValueX = (coinValueDisplay.width - coinValueTxt.width) / 2
    const amountY = (coinValueDisplay.height - amountTxt.height) / 1.8
    const amountX = (coinValueDisplay.width - amountTxt.width) / 2

    coinValueTxt.y = coinValueY
    coinValueTxt.x = coinValueX
    amountTxt.y = amountY
    amountTxt.x = amountX
    decBtn.position.y = btnY
    decBtn.position.x = btnX
    incBtn.position.y = btnY
    incBtn.position.x = btnX + halfDisplay

    coinValueContainer.addChild(coinValueDisplay)
    coinValueContainer.addChild(decBtn)
    coinValueContainer.addChild(incBtn)
    coinValueContainer.addChild(coinValueTxt)
    coinValueContainer.addChild(amountTxt)

    coinValueContainer.position.x = halfSize


    // display 2
    const goldCoinContainer = createUIContainer("displayContainer", oneSize)
    const goldCoinDisplay = createSprite("DISPLAY", oneSize, oneSize)
    const goldCoin = createSprite("GOLD", btnSize, btnSize)
    const goldCoinAmountTxt = createText(coins, "text");
    const goldCoinX = (halfDisplay - goldCoin.width) / 2
    const goldCoinY = (goldCoinDisplay.height - goldCoin.height) / 2
    const goldCoinTxtY = (goldCoinDisplay.height - goldCoinAmountTxt.height) / 2
    const goldCoinTxtX = goldCoinDisplay.width / 4

    goldCoinAmountTxt.y = goldCoinTxtY
    goldCoinAmountTxt.x = goldCoinTxtX
    goldCoin.position.y = goldCoinY 
    goldCoin.position.x = goldCoinX + halfDisplay

    goldCoinContainer.addChild(goldCoinDisplay)
    goldCoinContainer.addChild(goldCoin)
    goldCoinContainer.addChild(goldCoinAmountTxt)
    goldCoinContainer.position.x = halfSize + oneSize

    rightContainer.addChild(coinValueContainer)
    rightContainer.addChild(goldCoinContainer)


    return rightContainer

}