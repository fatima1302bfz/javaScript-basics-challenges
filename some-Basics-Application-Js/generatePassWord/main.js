var password = document.getElementById("pass");

function genPassword() {

    var passGen = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H",
        "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z", "0",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "$", "!", "@", "&", "#"
    ]
    var passwordLength = 10,
        password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * passGen.length);
        password += passGen[randomIndex];
    }
    document.getElementById("pass").value = password;
}