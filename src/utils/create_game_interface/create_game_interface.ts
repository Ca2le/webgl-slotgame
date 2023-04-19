import { Container, Sprite, utils } from "pixi.js";

export function createGameInterface(fetchNewData: () => Promise<void>) {
    const UIContainer = new Container()
    UIContainer.name = 'UIContainer'
    const button = new Sprite(utils.TextureCache[`/src/assets/BUTTON.png`]);
    button.eventMode = "static"
    button.alpha = 1;
    button.on('tap', (event) => {
        console.log('Btn 👻', event)
        fetchNewData()

    });
    UIContainer.addChild(button)
    return UIContainer

}
