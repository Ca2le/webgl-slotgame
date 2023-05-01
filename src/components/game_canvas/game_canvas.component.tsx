import { Application, Container, DisplayObject, Graphics, Sprite, Ticker, } from "pixi.js";
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
        const Darkness = createDarkGraph(2000, 2000, 0.2, -1, "dark")
        const BackgroundImg = createSprite("BACKGROUND", 1050, 750)
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
        console.log(loading)
    }, [loading.status, autobet.autoLoading])

    return <div style={{ height: "100%", width: "auto" }} ref={ref} />
}

// export function spinOneTime(app: Application<HTMLCanvasElement>, memoGameData: Result) {
//     const { symbol } = store.getState().screenSize
//     const { filterdPayLine } = store.getState().game
//     const maskContainer = findContainer(app, "maskContainer")
//     const newGridContainer = createGridContainer(memoGameData)

//     //Switch old grid with new grid ♻️
//     maskContainer.removeChildAt(0)
//     maskContainer.addChild(newGridContainer)

//     const grid = newGridContainer.children
//     const payLine1 = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
//     if (filterdPayLine.length > 0) {
//         filterdPayLine.forEach((payline, index) => {
//             payline.forEach((cords, i) => {
//                 const x = cords[0]
//                 const y = cords[1]
//                 const reel = grid[x] as Container<DisplayObject>
//                 const symbol = reel.children[y] as Container<DisplayObject>
//                 const graph = symbol.getChildByName("border") as DisplayObject
//                 graph.visible = false
//             })
//         })
//     }
//     const stopAt = symbol.fullSize
//     let speed = 20;
//     app.ticker.add(() => {
//         newGridContainer.position.y += speed;
//         if (newGridContainer.position.y >= stopAt) {
//             speed = 0
//         }
//     })
// }
export function spinOneTime(app: Application<HTMLCanvasElement>, memoGameData: Result) {
    const { totalPrice } = store.getState().game

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
    const stopAt = symbol.fullSize
    let speed = 20;

    const oneSpin = new Ticker()
    oneSpin.add(() => {
        newGridContainer.y += speed;
        if (newGridContainer.position.y >= stopAt) {
            speed = 0
            if (paylines.length > 0) {
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
    // const spinner = app.ticker.add(() => {
    //     newGridContainer.y += speed;
    //     if (newGridContainer.position.y >= stopAt) {
    //         speed = 0

    //     }
    // })
}

export function activateAlphas(memoGameData: Result) {
    memoGameData.forEach((reel, i) => {
        for (let index = 0; index < 3; index++) {
        }
    })
}

export function createDarknessContainer(height: number, width: number, alpha: number) {
    const createFrame = (height: number, width: number) => {
        const graph = new Graphics();
        graph.height = height
        graph.width = width
        graph.name = "darkframe"
        graph.beginFill("rgba(7, 2, 45)");
        graph.drawRect(0, 0, width, height);
        graph.endFill();
        return graph
    }

    const container = new Container()
    container.name = "darknessContainer"
    container.width = width
    container.height = height
    const leftFrame = createFrame(750, 150)
    const rightFrame = createFrame(750, 150)
    const topFrame = createFrame(150, 750)
    const bottomFrame = createFrame(150, 750)
    bottomFrame.y = height - 150
    bottomFrame.x = 150
    topFrame.x = 150
    rightFrame.x = width - 150
    container.addChild(leftFrame)
    container.addChild(rightFrame)
    container.addChild(topFrame)
    container.addChild(bottomFrame)


    // const inverseMask = new Graphics();
    // inverseMask.name = "darkness"
    // graph.beginFill("rgba(7, 2, 45)");
    // inverseMask.drawRect(0, 0, 50, 50); // adjust the dimensions and position to match your inner rectangle
    // graph.endFill();

    // const x = (width - mask.width)/2
    // const y = (height - mask.height)/2
    // mask.x = x
    // mask.y = y
    // graph.addChild(inverseMask)
    // container.addChild(graph)

    container.alpha = alpha
    return container
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


        // if (newDataIsLoaded && memoGameData) {
        //     console.log("What is this?", gameEconomy.coins)
        //     console.log(gameData, "GAMEDATA :O")
        //     dispatch({ type: "REMOVE_COINS" })
        //     updateEconomy(memorizedApp, "coins")
        //     console.log("What is this?", gameEconomy.coins)
        //     startNewRound(memorizedApp, memoGameData)
        //     dispatch({ type: "ADD_COINS", payload: gameData.totalPrice })
        //     // updateEconomy(memorizedApp, "coins")
        //     // cleanUp(memorizedApp)
        //     setNewDataIsLoaded(false)
        // }