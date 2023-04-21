import { Container, Sprite, utils } from "pixi.js";
import { GameStatus } from "../../network/slot_simulator";
import { handleTap } from "../handle_tap/handle_tap.util";
import { createContainer } from "../create_container/create_container.util";


export function createGameInterface(fetchNewData: () => Promise<GameStatus | undefined>) {
    const UIContainer = createContainer("UIContainer")
    const button = new Sprite(utils.TextureCache[`/src/assets/BUTTON.png`]);
    button.eventMode = "static"
    button.alpha = 1;
    button.on('tap', (e) => handleTap(e, fetchNewData));
    UIContainer.addChild(button)
    return UIContainer

}
