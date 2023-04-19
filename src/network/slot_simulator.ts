import { Value, Result } from "../types/global.types";
import { random } from "lodash"

// RETURNS 3 SLOTS REELS, IT WORKS GOOD..
// export function generateResult() {
//     const value: Value[] = ["10", "J", "Q", "K", "A", "SCATTER", "WILD", "BONUS"]
//     const result: Value[][] = []
//     for (let i = 0; i < 5; i++) {
//         const numbers = randomNr()
//         const reel = [value[numbers[0]], value[numbers[1]], value[numbers[2]]]
//         result.push(reel)
//     }
//     return result
// }

// function randomNr(): number[] {
//     const numbers: number[] = [];
//     while (numbers.length < 3) {
//         const value = random(0, 6)
//         const duplicates = numbers.includes(value)
//         if (!duplicates) {
//             numbers.push(value);
//         }
//     }
//     return numbers;
// }

// RETURNS 8 SLOTS REELS, IT WORKS GOOD..
export function generateResult() {
    const value: Value[] = ["10", "J", "Q", "K", "A", "SCATTER", "WILD", "BONUS"]
    const result: Value[][] = []
    for (let i = 0; i < 5; i++) {
        const numbers = randomNr()
        const reel = [value[numbers[0]], value[numbers[1]], value[numbers[2]], value[numbers[3]], value[numbers[4]], value[numbers[5]], value[numbers[6]], value[numbers[7]]]
        result.push(reel)
    }
    return result
}

function randomNr(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 8) {
        const value = random(0, 7)
        const duplicates = numbers.includes(value)
        if (!duplicates) {
            numbers.push(value);
        }
    }
    return numbers;
}
