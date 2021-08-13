printScreen();

function printScreen() {
    var x, y, z;
    x = 128;
    y = x.toString(16);
    z = x.toString(8);
    a = x.toString(2);
    document.getElementById('result').innerHTML = "odecimal system: " + x + " < br > " +
        "Hexadecimal sistem: " + y + "<br>" +
        "Octal sistem: " + x + "<br>" +
        "Binary sistem: " + a;
}