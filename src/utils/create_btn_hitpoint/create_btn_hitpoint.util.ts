import { Container, Graphics, Sprite, utils } from "pixi.js";
import { Action, Assets } from "../../types/global.types";
import { store } from "../../store/store";

export function createBtn(asset: Assets, actionType: string) {
    const container = new Container()
    container.name = `${asset}Container`
    const sprite = new Sprite(utils.TextureCache[`/src/assets/${asset}.png`]);
    sprite.name = asset
    const radius = sprite.width / 2
    const graphics = new Graphics();
    graphics.name = `${asset}HitArea`
    graphics.beginFill(0x0000FF);
    graphics.alpha = 0
    graphics.drawCircle(radius, radius, radius);
    graphics.endFill();
    graphics.interactive = true
    graphics.on("click", () => {
        store.dispatch({ type: actionType })
    })

    container.addChild(sprite)
    container.addChild(graphics)

    return container
}