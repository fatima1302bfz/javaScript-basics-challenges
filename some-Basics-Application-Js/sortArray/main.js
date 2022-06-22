 function sortArray(array) {
     var x = 0;
     for (var i = 0; i < array.length; i++) {
         for (var j = i; j < array.length; j++) {
             if (array[j] < array[i]) {
                 x = array[j];
                 array[j] = array[i];
                 array[i] = x;
             }
         }
     }
     return array;
 }

 var array1 = [3, 51, 7, 18, 10, 14, 6, 58, 31]
 array2 = [3, 5, 7, 8, 10, 14, 6, 58, 31, 110, 5, 78, 66, 23, 1],
     array3 = [0.5, 1.5, 7.2, -0.8, 9.9, 11.3, -5.5, -0.77, 1, 2, 5.2, 11],
     array4 = [30, 15, 7, 8, -9, 113, 55, -77, 1, -2, -100, 11];

 console.log("sort array1");
 console.log(sortArray(array1));
 console.log("sort array2");
 console.log(sortArray(array2));
 console.log("sort array3");
 console.log(sortArray(array3));
 console.log("sort array4");
 console.log(sortArray(array4));