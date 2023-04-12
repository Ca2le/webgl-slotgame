const reels = [
    ['A', 'K', 'Q', 'J', 'SCATTER', 'WILD', 'BONUS'],  // reel 1
    ['A', 'K', 'Q', 'J', 'SCATTER', 'WILD', 'BONUS'],  // reel 2
    ['A', 'K', 'Q', 'J', 'SCATTER', 'WILD', 'BONUS'],  // reel 3
    ['A', 'K', 'Q', 'J', 'SCATTER', 'WILD', 'BONUS'],  // reel 4
    ['A', 'K', 'Q', 'J', 'SCATTER', 'WILD', 'BONUS']   // reel 5
];

const rows = [
    [reels[0][0], reels[1][0], reels[2][0], reels[3][0], reels[4][0]],  // top_row
    [reels[0][1], reels[1][1], reels[2][1], reels[3][1], reels[4][1]],  // middle_row
    [reels[0][2], reels[1][2], reels[2][2], reels[3][2], reels[4][2]]   // bottom_row
];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}