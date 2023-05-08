import { Application, Container, DisplayObject, Graphics, Sprite, Texture, Ticker, utils, } from "pixi.js";
import * as partical from 'pixi.js'
import { useEffect, useMemo, useRef, useState, } from "react";
import { useData } from "../../network/useData";
import { createGridContainer } from "../../utils/create_grid_container/create_grid_container.util";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/reducer.types";
import { store } from "../../store/store";
import { createGameContainer } from "../../utils/create_container/create_container.util";
import { createUI } from "../../utils/create_game_interface/create_game_interface.utils";
import { createMaskContainer } from "../../utils/create_mask_container/create_mask_container.util";
import { updateUI } from "../../utils/update_ui/update_ui";
import { replaceOldGrid } from "../../utils/grid_with_effects/grid_with_effects.util";
import { Result } from "../../types/global.types";

import { BG_darknesEffect } from "../../utils/bg_darkness_effects/bg_darkness_effects.util";
import { lightEffects } from "../../utils/light_effects/light_effects.util";
import { createSprite } from "../../utils/create_sprite/create_sprite.util";
import { startAutobet } from "../../utils/autobet/autobet.util";
import { goldRainEmitter } from "../../utils/gold_rain_effect/gold_rain_effect";
import { findContainer } from "../../utils/find/find_container.util";
import { CanvasContainer, Div } from "./game_canvas.styles";
import { BobsMessage } from "../bobsmessage/bobsmessage.component";
import { goldShower } from "../../utils/gold_shower/gold_shower.util";
import { createGoldShower } from "../../utils/gold_shower/create_gold_shower.util";
import { cleanGameContainer } from "../../utils/clean_game_container/clean_game_container.util";


export interface PayLineObj {
    line: string,
    winningLine: Graphics[]
}

export function GameCanvas() {
    const { screenSize, game, gameEconomy, autobet, loading } = useSelector((state: RootState) => state)
    const { bet, coinValue } = gameEconomy
    const [hasPayed, setHasPayed] = useState(false)
    const { gameData, fetchNewData, newDataIsLoaded, setNewDataIsLoaded } = useData()
    const memoGameData = useMemo(() => gameData?.grid, [gameData])
    const ref = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const memorizedApp = useMemo(() => {
        const app = new Application<HTMLCanvasElement>({ width: screenSize.max.width, height: screenSize.max.height, backgroundAlpha: 0 })
        // All this does is creating, scaling and positioning the intitial game content. The heart of the app :D
        const gameContainer = createGameContainer()
        const Darkness = createDarkGraph(screenSize.gameContainer.height, screenSize.gameContainer.width, 0.2, -1, "dark")
        const BackgroundImg = createSprite("BACKGROUND", screenSize.gameContainer.width, screenSize.gameContainer.height)
        const UIContainer = createUI(fetchNewData, app)
        const maskContainer = createMaskContainer()
        const gridContainer = createGridContainer(game.grid)
        BackgroundImg.zIndex = -2
        gameContainer.addChild(BackgroundImg)
        gameContainer.addChild(maskContainer)
        gameContainer.addChild(Darkness)
        maskContainer.addChild(gridContainer)
        gameContainer.addChild(UIContainer)
        app.stage.addChild(gameContainer)
        return app
    }, [])

    useEffect(() => {
        const element = ref.current
        if (element) {
            memorizedApp.resizeTo = element
            element.appendChild(memorizedApp.view)
            memorizedApp.start()
        }
    }, [memorizedApp])

    useEffect(() => {
        if (newDataIsLoaded && memoGameData) {
            dispatch({ type: "REMOVE_COINS" });
            updateUI(memorizedApp, "coins_remove");
            setHasPayed(true)
            setNewDataIsLoaded(false);
        }
    }, [newDataIsLoaded])

    useEffect(() => {
        if (hasPayed) {
            cleanGameContainer(memorizedApp)
            // spinOneTime(memorizedApp, memoGameData);
            spinOneTime(memorizedApp, memoGameData);
            setHasPayed(false)
        }
    }, [hasPayed])

    useEffect(() => {
        startAutobet(fetchNewData)
    }, [autobet.autoLoading])

    useEffect(() => {
        updateUI(memorizedApp, "coins_added");
    }, [gameEconomy.coins])

    useEffect(() => {
        updateUI(memorizedApp, "bet_status");
    }, [bet])

    useEffect(() => {
        updateUI(memorizedApp, "current_coin_value");
    }, [coinValue])

    useEffect(() => {
        updateUI(memorizedApp, "loading_status", fetchNewData);

    }, [loading.status, autobet.autoLoading])

    useEffect(() => {
        updateUI(memorizedApp, "resize");

    }, [screenSize])


    return <CanvasContainer >
        <Div width={screenSize.max.width} height={screenSize.max.height} ref={ref} >
            <BobsMessage />
        </Div>
    </CanvasContainer>
}


export function spinOneTime(app: Application<HTMLCanvasElement>, memoGameData: Result) {

    const { totalPrice } = store.getState().game
    const gameContainer = findContainer(app, "gameContainer")
    const darkness = findContainer(app, "darkness")
    const goldTexture = utils.TextureCache[`./assets/GOLD.png`]
    const gold = Texture.from('./GOLD.png')




    let time = 0
    const tick = new Ticker()
    tick.add(() => {
        time += 1
    })
    tick.start()


    let timerID
    BG_darknesEffect(app, false)
    let addAnimation = true
    const { symbol } = store.getState().screenSize
    const game = store.getState().game
    let count = 0
    const payLine1 = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
    //Switch old grid with new grid ♻️
    const newGridContainer = replaceOldGrid(app, memoGameData)
    let paylineIndex = 0
    const paylines = game.filterdPayLine
    const rotationSpeed = 0.01;

    const showPayline = () => {
        const animation = new Ticker()
        const prevIndex = (paylineIndex === 0) ? paylines.length - 1 : paylineIndex - 1
        const prevPayline = paylines[prevIndex]
        const payline = paylines[paylineIndex]
        payline.forEach((cords, i) => {
            const x = cords[0]
            const y = cords[1]

            const reel = newGridContainer.children[x] as Container<DisplayObject>
            const symbol = reel.children[y] as Container<DisplayObject>
            const radiance = symbol.getChildByName("radianceContainer") as Container<DisplayObject>
            const mask = radiance.getChildByName("radiance") as Sprite
            if (addAnimation) {
                animation.add(() => {
                    mask.rotation += rotationSpeed;
                    mask.scale.x = 1 + Math.sin(count) * 0.04;
                    mask.scale.y = 1 + Math.cos(count) * 0.04;

                });
            }
        })
        animation.start();
        lightEffects(prevPayline, newGridContainer, "remove")
        lightEffects(payline, newGridContainer, "add")
        paylineIndex++
        if (paylineIndex < paylines.length) {
            timerID = setTimeout(showPayline, 1500)
        } else {
            addAnimation = false
            paylineIndex = 0
            timerID = setTimeout(showPayline, 1500)
        }
    }
    // change this later
    const stopAt = symbol.fullSize
    let speed = 20;

    const oneSpin = new Ticker()
    oneSpin.add( () => {

        newGridContainer.y += speed;
        if (newGridContainer.position.y >= stopAt) {
            speed = 0
            if (paylines.length > 0) {
                createGoldShower(app)
                showPayline()
                BG_darknesEffect(app, true)
                activateAlphas(memoGameData)
            }
            store.dispatch({ type: "ADD_COINS", payload: totalPrice })
            store.dispatch({ type: "NOT_LOADING" })

            oneSpin.destroy()
        }
    })
    oneSpin.start()

}

export function activateAlphas(memoGameData: Result) {
    memoGameData.forEach((reel, i) => {
        for (let index = 0; index < 3; index++) {
        }
    })
}

export function createDarkGraph(height: number, width: number, alpha = 0.2, zindex = 0, input: "dark" | "light") {
    const graph = new Graphics();
    graph.height = height
    graph.width = width
    graph.name = "darkness"
    if (input === "dark") {
        graph.beginFill("rgba(7, 2, 45)");
    } else {
        graph.beginFill("rgba(255, 255, 255)");
    }
    graph.drawRect(0, 0, width, height);
    graph.endFill();
    graph.alpha = alpha
    graph.zIndex = zindex



    return graph
}
