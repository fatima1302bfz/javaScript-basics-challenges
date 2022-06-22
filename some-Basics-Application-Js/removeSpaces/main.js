function trimLeftSpace(str) {
    var doneTrimming = false
    var ret = ""
    for (var index = 0; index < str.length; index++) {
        if (str[index] !== ' ') {
            doneTrimming = true
        }
        if (doneTrimming) {
            ret += str[index]
        }
    }
    return ret;
}
var str = "   Angry Bird   ";
console.log(str);
var result = trimLeftSpace(str);
console.log(result);