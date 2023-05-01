import { Assets } from "../../types/global.types";
import { Sprite, utils } from "pixi.js";

export function createSprite(imgIcon: Assets, width: number, height: number) {
    const sprite = new Sprite(utils.TextureCache[`./assets/${imgIcon}.png`]);
    sprite.name = imgIcon
    return sprite
}