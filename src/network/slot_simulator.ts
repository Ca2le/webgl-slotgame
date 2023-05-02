import { __values } from "../const/const";
import { Value, Result, SimpleValue } from "../types/global.types";
import { random } from "lodash"
interface Win {
    symbol: Value
    result: string[];
    price: number;
}

function generateReels() {
    const value: Value[] = ["TEN", "J", "Q", "K", "A", "SCATTER", "WILD", "BONUS"]
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

function checkPaylines(result: Result, bet: number) {
    const grid = result
    const gameStatus: GameStatus = {
        grid,
        wins: [],
        payLines: [],
        payLineNumber: [],
        filterdPayLine: [],
        winningSymbol: [],
        totalPrice: 0,
    }

    const payLine1 = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
    const payLine2 = [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
    const payLine3 = [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]
    const payLine4 = [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]
    const payLine5 = [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
    const payLine6 = [[0, 0], [1, 0], [2, 2], [3, 0], [4, 0]]
    const payLine7 = [[0, 2], [1, 2], [2, 0], [3, 2], [4, 2]]
    const payLine8 = [[0, 0], [1, 2], [2, 1], [3, 2], [4, 2]]
    const payLine9 = [[0, 0], [1, 0], [2, 1], [3, 0], [4, 0]]

    const payLines = [payLine1, payLine2, payLine3, payLine4, payLine5, payLine6, payLine7, payLine8, payLine9]


    payLines.map(((payLine, index) => {
        const winArr = compare(payLine, grid)
        if (winArr.length > 0) {
            const line = index + 1
            gameStatus.payLineNumber.push(line)
            gameStatus.payLines.push(payLine)
            const win = winArr[0]
            const symbol = win.symbol
            gameStatus.winningSymbol.push(symbol)
            gameStatus.totalPrice = gameStatus.totalPrice + win.price
            let filterdPayLine = []
            for (let i = 0; i < 5; i++) {
                const x = payLine[i][0]
                const y = payLine[i][1]
                if (symbol === grid[x][y] || "WILD" === grid[x][y]) {
                    grid[x][y] = `${grid[x][y]}__` as Value
                    filterdPayLine.push([x, y])
                }
            }
            gameStatus.filterdPayLine.push(filterdPayLine)
            filterdPayLine = []
        }
    }))

    gameStatus.totalPrice = gameStatus.totalPrice * bet

    console.log(gameStatus, "win here!")
    return gameStatus
}

export interface GameStatus {
    grid: Result;
    wins: Win[];
    payLines: number[][][];
    payLineNumber: number[];
    filterdPayLine: number[][][];
    winningSymbol: Value[];
    totalPrice: number
}

export function generateResult(bet: number): GameStatus {

    const newGrid = generateReels()
    const gameStatus = checkPaylines(newGrid, bet)
    return gameStatus
}

export function compare(payline: number[][], grid: Result) {
    const stack: Value[] = []
    let paylineWins: Win[] = []

    for (let i = 0; i < 5; i++) {
        const y = payline[i][0]
        const x = payline[i][1]
        stack.push(grid[y][x])
    }
    __values.forEach(value => {

        // Examples of result outcome: ["K", "K"] or ["Q"] or ["A", "A", "A", "A"].
        const result = stack.filter((symbol) => symbol === value || symbol === "WILD" ? true : false) as SimpleValue[]

        // If we have a win. example  ["A", "A", "WILD", "A"].
        if (result.length > 2) {
            const filterdResult = result.filter(symbol => symbol !== "WILD")
            const winningSymbol = filterdResult[0]
            // Calculate the prize with symbol.
            const price = calculateWin(result, winningSymbol)

            const win: Win = {
                symbol: winningSymbol,
                result,
                price
            }
            paylineWins.push(win)
        }

    })

    if (paylineWins.length > 1) {
        //Make the highest price win.
        const highestPriceFirst = paylineWins.sort((a, b) => b.price - a.price).slice(0, 1);
        const highestWin = highestPriceFirst[0]
        paylineWins = []
        paylineWins.push(highestWin)
    }

    return paylineWins
}

function calculateWin(result: Value[], winSymbol: SimpleValue) {
    let symbol = winSymbol
    if (!winSymbol) {
        symbol = "WILD"
    }
    const priceMultiplier = {
        WILD: 9,
        TEN: 1,
        J: 1.5,
        Q: 2,
        K: 2.5,
        A: 3
    }
    const y = result.length
    const x = priceMultiplier[symbol]
    const price = y * x
    const floorPrice = Math.floor(price)
    return floorPrice
}