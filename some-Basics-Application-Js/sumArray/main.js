const array1 = [3, 5, 7, 8, 10, 14, 6, 58, 3],
    array2 = [30, 15, 7, 8, -9, 113, 55, -77, 1, -2, -100, 11],
    array3 = [0.5, 1.5, 7.2, -0.8, 9.9, 11.3, -5.5, -0.77, 1, 2, 5.2, 11];

function somme(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(somme(array1));
console.log(somme(array2));
console.log(somme(array3));