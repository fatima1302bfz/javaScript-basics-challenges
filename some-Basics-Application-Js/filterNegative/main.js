function filterNegativeNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array.splice(i, 1); //As the items are removed from the array the index still increments and the next item after your matched value is skipped.
            i--; //decrement the index variable so it does not skip the next item in the array.
        }
    }
    return array;
}
var array = [-100, -30, 13, 15, 7, 8, -9, 113, -4, 55, -77, 1, -2, -2, -3, -4, -100, 11, -1, -7, 10, 11, -25]
console.log(filterNegativeNumber(array))