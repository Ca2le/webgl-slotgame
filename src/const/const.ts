import { Color, Sprite, TextStyle, utils } from "pixi.js";
import { Result, Value } from "../types/global.types";
import { store } from "../store/store";

const sprite1 = new Sprite(utils.TextureCache[`./assets/TEN.png`]);
const sprite2 = new Sprite(utils.TextureCache[`./assets/J.png`]);
const sprite3 = new Sprite(utils.TextureCache[`./assets/Q.png`]);
const sprite4 = new Sprite(utils.TextureCache[`./assets/K.png`]);
const sprite5 = new Sprite(utils.TextureCache[`./assets/A.png`]);
const sprite6 = new Sprite(utils.TextureCache[`./assets/SCATTER.png`]);
const sprite7 = new Sprite(utils.TextureCache[`./assets/WILD.png`]);
const sprite8 = new Sprite(utils.TextureCache[`./assets/BONUS.png`]);
export const spriteList = [sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8]

export const initialState = [
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"]
] as Result

export const __values: Value[] = ["TEN", "J", "Q", "K", "A", "WILD"]

export const colorCode: string[] = ["#F7931E","#ED1C24","#39B54A","#D9E021","#3FA9F5","#00FFFF","#0000FF","#9E005D","#FF7BAC"]