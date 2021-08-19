function printScreen() {
    var valueForm, result = "";
    result = document.getElementById('result');
    valueForm = document.forms[0].username.value;
    //valueForm = document.forms[0].pass.value;
    //valueForm = document.frmBegin.username.value;
    //valueForm = document.frmBegin.pass.name;
    //valueForm = document.forms[0].elements[0].value;
    //valueForm = document.forms[0].elements[1].value;
    //valueForm = document.getElemetByID('username').value;
    result.innerHTML = valueForm;
}