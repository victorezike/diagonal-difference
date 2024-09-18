function diagonalDifference(input) {
    const n = parseInt(input[0]);
    const matrix = [];
   
    for (let i = 1; i <= n; i++) {
        const row = input[i].split(' ').map(Number);
        matrix.push(row);
    }
   
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
   
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }
   
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const input = [
    '3',
    '11 2 4',
    '4 5 6',
    '10 8 -12'
];

console.log(diagonalDifference(input));

