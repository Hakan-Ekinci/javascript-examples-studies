/*function mOver(obj) {
    obj.src = "on.png";
}

function mOut(obj) {
    obj.src = "off.png";
}*/




var x = document.querySelector('#picture');
x.onmouseover = function() {
    this.src = "on.png";
}

x.onmouseout = function() {
    this.src = "off.png";
}