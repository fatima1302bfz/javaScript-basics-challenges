function LengthConverter(valNum) {
    if (valNum > 0) {
        document.getElementById("convert").value = valNum / 1.609;
    } else {
        document.write("you should enter a positive number")
    }
}