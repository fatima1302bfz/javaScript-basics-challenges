const array1 = [3, 51, 7, 18, 10, 14, 6, 58, 31],
    array2 = [3, 5, 7, 8, 10, 14, 6, 58, 31, 110, 5, 78, 66, 23, 1]

function reversearray(array) {

    var length = array.length;
    var reverse = []
    var j = 0;
    for (let i = length - 1; i > -1; i--) {
        reverse[j] = array[i];
        j++;
    }
    return reverse;
}
console.log("reverse");
console.log(reversearray(array1));
console.log(reversearray(array2));