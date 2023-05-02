import { Text, TextStyle } from "pixi.js";
import { store } from "../../store/store";
const { symbol } = store.getState().screenSize
const textStyle = new TextStyle({
    fontFamily: ['Sigmar', 'cursive'],
    fontSize: 0.13 * symbol.fullSize,
    fontWeight: '400',
    fill: '#FFFFFF',
    dropShadow: true,
    dropShadowBlur: 3,
    dropShadowDistance: 2,
})
const headerStyle = new TextStyle({
    fontFamily: ['Sigmar', 'cursive'],
    fontSize: 0.08 * symbol.fullSize,
    fontWeight: '300',
    fill: '#FFFFFF',
    dropShadow: true,
    dropShadowBlur: 3,
    dropShadowDistance: 2,
})

export function createText(text: number | string, type: "header" | "text") {
    switch (type) {
        case "header": {
            const txt = new Text(text, headerStyle);
            txt.name = type
            return txt
        }
        case "text": {
            const txt = new Text(text, textStyle);
            txt.name = type
            return txt
        }
    }
}

