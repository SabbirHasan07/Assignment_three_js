
let johnScores = [89, 120, 103];
let mikeScores = [116, 94, 123];
let maryScores = [97, 134, 105];

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
let johnAverage = calculateAverage(johnScores);
let mikeAverage = calculateAverage(mikeScores);
let maryAverage = calculateAverage(maryScores);

let winner;
let highestAverage = Math.max(johnAverage, mikeAverage, maryAverage);

if (highestAverage === johnAverage && highestAverage !== mikeAverage && highestAverage !== maryAverage) {
    winner = "John's team";
} else if (highestAverage === mikeAverage && highestAverage !== johnAverage && highestAverage !== maryAverage) {
    winner = "Mike's team";
} else if (highestAverage === maryAverage && highestAverage !== johnAverage && highestAverage !== mikeAverage) {
    winner = "Mary's team";
} else {
    winner = "It's a draw!";
}
console.log("Winner: " + winner + ", Average Score: " + highestAverage);
johnScores = [110, 95, 100];
mikeScores = [105, 115, 95];
maryScores = [120, 105, 90];

johnAverage = calculateAverage(johnScores);
mikeAverage = calculateAverage(mikeScores);
maryAverage = calculateAverage(maryScores);

highestAverage = Math.max(johnAverage, mikeAverage, maryAverage);

if (highestAverage === johnAverage && highestAverage !== mikeAverage && highestAverage !== maryAverage) {
    winner = "John's team";
} else if (highestAverage === mikeAverage && highestAverage !== johnAverage && highestAverage !== maryAverage) {
    winner = "Mike's team";
} else if (highestAverage === maryAverage && highestAverage !== johnAverage && highestAverage !== mikeAverage) {
    winner = "Mary's team";
} else {
    winner = "It's a draw!";
}
console.log("Winner: " + winner + ", Average Score: " + highestAverage);
