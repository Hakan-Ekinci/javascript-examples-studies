function getDOM() {
    var findElement, i, message = "";
    findElement = document.forms["frmDOM"];
    for (i = 0; i < findElement.length; i++) {
        message += findElement[i].value;
    }
    result = document.querySelector("#result");
    result.innerHTML.message;
}