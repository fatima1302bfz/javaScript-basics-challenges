const check_miss = (array) => {
    let temp = Array(Math.max(...array)).fill(0);
    array.forEach((item) => (temp[item] = 1));

    const missing_items =
        temp.map((item, index) =>
            (item === 0 ? index : -1)).filter((item) => item !== -1);

    console.log(missing_items);
};


array = [0, 11, 92, 83, 47, 50, 1, 8, 7, 99, 10,
    6, 12, 13, 14, 15, 16, 17, 18, 19, 32,
    22, 21, 46, 24, 25, 26, 27, 29, 30,
    35, 20, 33, 34, 45, 36, 81, 38, 39, 40,
    41, 72, 43, 85, 31, 23, 4, 48, 49, 5,
    51, 98, 53, 54, 77, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 44, 67, 68, 71, 70,
    69, 42, 73, 74, 75, 76, 55, 78, 79, 88,
    37, 82, 3, 84, 66, 86, 87, 80, 9, 90,
    91, 2, 93, 94, 95, 96, 97, 52, 89, 100
]
check_miss(array); //28