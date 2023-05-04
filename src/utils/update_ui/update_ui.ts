import { Application, Container, DisplayObject, Graphics, Sprite } from "pixi.js";
import { createText } from "../create_text/create_text.util";
import { store } from "../../store/store";
import { addHitArea } from "../create_button/create_button.util";
import { GameStatus } from "../../network/slot_simulator";
import { GlowFilter } from "@pixi/filter-glow";

type Input = "coins_remove" | "current_coin_value" | "bet_status" | "loading_status" | "coins_added" | "resize"

export function updateUI(app: Application<HTMLCanvasElement>, input: Input, fetchNewData?: () => Promise<GameStatus | undefined>) {
    const { loading, autobet, gameEconomy, screenSize } = store.getState()
    const { coins, bet, coinValue } = gameEconomy
    const { autoLoading, numbersOfBets } = autobet
    const gameContainer = app.stage.getChildByName("gameContainer") as Container<DisplayObject>
    const maskContainer = gameContainer.getChildByName('maskContainer') as Container<DisplayObject>
    const UIContainer = gameContainer.getChildByName("UIContainer") as Container<DisplayObject>
    const rightContainer = UIContainer.getChildByName("rightContainer") as Container<DisplayObject>
    const centerContainer = UIContainer.getChildByName("centerContainer") as Container<DisplayObject>
    const leftContainer = UIContainer.getChildByName("leftContainer") as Container<DisplayObject>
    const settingsContainer = leftContainer.getChildByName("settingsContainer") as Container<DisplayObject>
    const betValueContainer = leftContainer.getChildByName("displayContainer") as Container<DisplayObject>
    const coinValueCointainer = rightContainer.getChildAt(0) as Container<DisplayObject>
    const coinCointainer = rightContainer.getChildAt(1) as Container<DisplayObject>

    const update_coins = () => {
        const oldCoins = coinCointainer.getChildByName("text")
        const newCoins = createText(coins, "text")
        const x = (coinCointainer.width - newCoins.width) / 3
        const y = (coinCointainer.height - newCoins.height) / 2
        newCoins.position.set(x, y)
        coinCointainer.addChild(newCoins)
        oldCoins?.destroy()
    }

    switch (input) {
        case "resize": {
            gameContainer.width = screenSize.max.width
            gameContainer.height = screenSize.max.height

            console.log(screenSize)

        }
        case "coins_remove": {
            update_coins()
            break
        }
        case "coins_added": {
            update_coins()
            break
        }
        case "bet_status": {
            const oldBet = betValueContainer.getChildByName("text")
            const newBet = createText(bet, "text")
            const x = (betValueContainer.width - newBet.width) / 2
            const y = (betValueContainer.height - newBet.height) / 2
            newBet.position.set(x, y)
            betValueContainer.addChild(newBet)
            oldBet?.destroy()
            break
        }
        case "current_coin_value": {
            const oldValue = coinValueCointainer.getChildByName("text")
            const newValue = createText(coinValue.value, "text")
            const x = (coinValueCointainer.width - newValue.width) / 2
            const y = (coinValueCointainer.height - newValue.height) / 2
            newValue.position.set(x, y)
            coinValueCointainer.addChild(newValue)
            oldValue?.destroy()
            update_coins()
            break
        }
        case "loading_status": {

            const dec_bet_btn = betValueContainer.getChildByName("DECREMENTContainer") as Container<DisplayObject>
            const inc_bet_btn = betValueContainer.getChildByName("INCREMENTContainer") as Container<DisplayObject>

            const dec_bet_hitarea = dec_bet_btn.getChildByName("DECREMENTHitArea") as Graphics
            const inc_bet_hitarea = inc_bet_btn.getChildByName("INCREMENTHitArea") as Graphics

            const dec_coinvalue_btn = coinValueCointainer.getChildByName("DECREMENTContainer") as Container<DisplayObject>
            const inc_coinvalue_btn = coinValueCointainer.getChildByName("INCREMENTContainer") as Container<DisplayObject>

            const dec_coinvalue_hitarea = dec_coinvalue_btn.getChildByName("DECREMENTHitArea") as Graphics
            const inc_coinvalue_hitarea = inc_coinvalue_btn.getChildByName("INCREMENTHitArea") as Graphics

            const anvil_1_sprite = centerContainer.getChildByName("ANVIL_1") as Sprite
            const anvil_2_sprite = centerContainer.getChildByName("ANVIL_2") as Sprite
            const shield_sprite = centerContainer.getChildByName("SHIELD") as Sprite

            const anvil_1_hitAreaContainer = centerContainer.getChildByName("ANVIL_1_hitarea") as Container<DisplayObject>
            const anvil_2_hitAreaContainer = centerContainer.getChildByName("ANVIL_2_hitarea") as Container<DisplayObject>
            const shield_hitAreaContainer = centerContainer.getChildByName("SHIELD_hitarea") as Container<DisplayObject>

            const anvil_1_hitarea = anvil_1_hitAreaContainer.getChildByName("hitarea") as Graphics
            const anvil_2_hitarea = anvil_2_hitAreaContainer.getChildByName("hitarea") as Graphics
            const shield_hitarea = shield_hitAreaContainer.getChildByName("hitarea") as Graphics

            //@ts-ignore
            const anvil_1_filter = anvil_1_sprite.filters[0] as Filter
            //@ts-ignore
            const anvil_2_filter = anvil_2_sprite.filters[0] as Filter
            //@ts-ignore
            const shield_filter = shield_sprite.filters[0] as Filter

            if (loading.status) {

                dec_bet_hitarea.interactive = false
                dec_bet_btn.alpha = 0.5

                inc_bet_hitarea.interactive = false
                inc_bet_btn.alpha = 0.5

                dec_coinvalue_hitarea.interactive = false
                dec_coinvalue_btn.alpha = 0.5

                inc_coinvalue_hitarea.interactive = false
                inc_coinvalue_btn.alpha = 0.5

                anvil_1_hitarea.interactive = false
                anvil_1_hitAreaContainer.alpha = 0.7
                anvil_1_sprite.alpha = 0.95
                anvil_1_filter.alpha = 0

                anvil_2_hitarea.interactive = false
                anvil_2_hitAreaContainer.alpha = 0.7
                anvil_2_sprite.alpha = 0.95
                anvil_2_filter.alpha = 0

                shield_hitarea.interactive = false
                shield_hitAreaContainer.alpha = 0.7
                shield_sprite.alpha = 0.95
                shield_filter.alpha = 0

                return
            }
            if (!loading.status) {
                if (!autoLoading) {
                    anvil_1_hitarea.interactive = true
                    anvil_1_hitAreaContainer.alpha = 1
                    anvil_1_sprite.alpha = 1
                    anvil_1_filter.alpha = 1

                    anvil_2_hitarea.interactive = true
                    anvil_2_hitAreaContainer.alpha = 1
                    anvil_2_sprite.alpha = 1
                    anvil_2_filter.alpha = 1

                    shield_hitarea.interactive = true
                    shield_hitAreaContainer.alpha = 1
                    shield_sprite.alpha = 1
                    shield_filter.alpha = 1

                    dec_bet_hitarea.interactive = true
                    dec_bet_btn.alpha = 1

                    inc_bet_hitarea.interactive = true
                    inc_bet_btn.alpha = 1

                    dec_coinvalue_hitarea.interactive = true
                    dec_coinvalue_btn.alpha = 1

                    inc_coinvalue_hitarea.interactive = true
                    inc_coinvalue_btn.alpha = 1

                    return
                }
            }
        }
    }
}

