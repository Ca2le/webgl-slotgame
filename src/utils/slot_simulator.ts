import { Value, Result } from "../types/global.types";
import { random } from "lodash"

export const initialState: Result = [["A", "K", "Q"], ["SCATTER", "Q", "10"], ["A", "J", "K"], ["K", "Q", "10"], ["10", "Q", "BONUS"]]

export function generateResult() {
    const value: Value[] = ["A", "K", "Q", "J", "SCATTER", "WILD", "BONUS"]
    const result: Value[][] = []
    for (let i = 0; i < 5; i++) {
        const numbers = randomNr()
        const reel = [value[numbers[0]], value[numbers[1]], value[numbers[2]]]
        result.push(reel)
    }
    return result
}

function randomNr(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 3) {
        const value = random(0, 6)
        const duplicates = numbers.includes(value)
        if (!duplicates) {
            numbers.push(value);
        }
    }
    return numbers;
}
