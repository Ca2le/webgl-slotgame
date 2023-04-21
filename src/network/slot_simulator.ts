import { Value, Result } from "../types/global.types";
import { random } from "lodash"


function generateReels() {
    const value: Value[] = ["10", "J", "Q", "K", "A", "SCATTER", "WILD", "BONUS"]
    const result: Value[][] = []
    for (let i = 0; i < 5; i++) {
        const numbers = randomNr()
        const reel = [
            value[numbers[6]], value[numbers[7]], value[numbers[1]], value[numbers[4]], value[numbers[2]], value[numbers[5]], value[numbers[3]], value[numbers[0]],
            value[numbers[0]], value[numbers[1]], value[numbers[2]], value[numbers[3]], value[numbers[4]], value[numbers[5]], value[numbers[6]], value[numbers[7]]
        ]
        result.push(reel)
    }
    return result as Result
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

function addAnyWin(grid: Result) {

    const row1 = [grid[0][5], grid[1][5], grid[2][5], grid[3][5], grid[4][5]]
    const row2 = [grid[0][6], grid[1][6], grid[2][6], grid[3][6], grid[4][6]]
    const row3 = [grid[0][7], grid[1][7], grid[2][7], grid[3][7], grid[4][7]]
    const newGrid = [row1, row2, row3]
    const gridLength = [grid[0][5], grid[1][5], grid[2][5], grid[3][5], grid[4][5], grid[0][6], grid[1][6], grid[2][6], grid[3][6], grid[4][6], grid[0][7], grid[1][7], grid[2][7], grid[3][7], grid[4][7]]


    const scatters = gridLength.filter(symbol => symbol === "SCATTER")

    const gameStatus = {
        grid,
        win: {
            scatters: scatters,
            threeInARow: [],
            fourInARow: [],
            fiveInARow: [],
        }
    }

    return gameStatus


}
export interface GameStatus {
    grid: Result;
    win: {
        scatters: Value[];
        threeInARow: never[];
        fourInARow: never[];
        fiveInARow: never[];
    };
}
export function generateResult(): GameStatus {
    const newGrid = generateReels()
    const gameStatus = addAnyWin(newGrid)
    return gameStatus
}