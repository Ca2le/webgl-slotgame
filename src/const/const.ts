import { Sprite, utils } from "pixi.js";

const sprite1 = new Sprite(utils.TextureCache[`/src/assets/10.png`]);
const sprite2 = new Sprite(utils.TextureCache[`/src/assets/J.png`]);
const sprite3 = new Sprite(utils.TextureCache[`/src/assets/Q.png`]);
const sprite4 = new Sprite(utils.TextureCache[`/src/assets/K.png`]);
const sprite5 = new Sprite(utils.TextureCache[`/src/assets/A.png`]);
const sprite6 = new Sprite(utils.TextureCache[`/src/assets/SCATTER.png`]);
const sprite7 = new Sprite(utils.TextureCache[`/src/assets/WILD.png`]);
const sprite8 = new Sprite(utils.TextureCache[`/src/assets/BONUS.png`]);

export const spriteList = [sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8]