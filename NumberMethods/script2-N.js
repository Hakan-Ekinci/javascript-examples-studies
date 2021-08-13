show();

function show() {
    var x;
    x = 7.856;
    document.getElementById('result').innerHTML = "our number:" + x + "<br>x.toExponential():" + x.toExponential() + "<br>" +
        "x.toExponential(2):" + x.toExponential(2) + "<br>" +
        "x.toExponential(4):" + x.toExponential(4) + "<br>" +
        "x.toExponential(6):" + x.toExponential(6) + "<br>" +
        "x.toFixed(0):" + x.toFixed(0) + "<br>" +
        "x.toFixed(2):" + x.toFixed(2) + "<br>" +
        "x.toFixed(4):" + x.toFixed(4) + "<br>" +
        "x.toFixed(6):" + x.toFixed(6) + "<br>" +
        "x.toFixed():" + x.toPrecision() + "<br>" +
        "x.toFixed(2):" + x.toPrecision(2) + "<br>" +
        "x.toFixed(4):" + x.toPrecision(4) + "<br>" +
        "x.toFixed(6):" + x.toPrecision(6) + "<br>";
}