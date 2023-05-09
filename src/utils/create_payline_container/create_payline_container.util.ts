import { Container, Sprite } from "pixi.js";
import { createSprite } from "../create_sprite/create_sprite.util";


export function createPaylineContainer() {
    const container = new Container()
    const line_1 = createSprite("LINE_1")
    const line_2 = createSprite("LINE_2")
    const line_3 = createSprite("LINE_3")
    const line_4 = createSprite("LINE_4")
    const line_5 = createSprite("LINE_5")
    const line_6 = createSprite("LINE_6")
    const line_7 = createSprite("LINE_7")
    const line_8 = createSprite("LINE_8")
    const line_9 = createSprite("LINE_9")
    const number_1 = createSprite("NUMBER_1")
    const number_2 = createSprite("NUMBER_2")
    const number_3 = createSprite("NUMBER_3")
    const number_4 = createSprite("NUMBER_4")
    const number_5 = createSprite("NUMBER_5")
    const number_6 = createSprite("NUMBER_6")
    const number_7 = createSprite("NUMBER_7")
    const number_8 = createSprite("NUMBER_8")
    const number_9 = createSprite("NUMBER_9")
    line_1.name = "line"
    line_2.name = "line"
    line_3.name = "line"
    line_4.name = "line"
    line_5.name = "line"
    line_6.name = "line"
    line_7.name = "line"
    line_8.name = "line"
    line_9.name = "line"
    container.name = "paylineContainer"
    container.zIndex = 0
    container.addChild(line_1, line_2, line_3, line_4, line_5, line_6, line_7, line_8, line_9, number_1, number_2, number_3, number_4, number_5, number_6, number_7, number_8, number_9)
    line_1.visible = false
    line_2.visible = false
    line_3.visible = false
    line_4.visible = false
    line_5.visible = false
    line_6.visible = false
    line_7.visible = false
    line_8.visible = false
    line_9.visible = false

    return container

}