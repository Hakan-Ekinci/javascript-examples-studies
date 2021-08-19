/*function validateForm() {
    var valueInput, resultFalse, resultTrue, message;
    valueInput = document.getElementById('number');
    resultFalse = document.getElementById('resultFalse');
    resultTrue = document.getElementById('resutTrue');

    if (valueInput.checkValidity() == false) {
        resultTrue.style.display = "none";
        resultFalse.style.display = "block";
        resultFalse.innerHTML = valueInput.validationMessage;

    } else {
        resultFalse.style.display = "none";
        resultTrue.style.display = "block";
        resultTrue.innerHTML = "Hic doesn't appear to be a problem";
    }
}*/



function validateForm() {
    var resultFalse, resultTrue, message;
    resultFalse = document.getElementById('resultFalse');
    resultTrue = document.getElementById('resutTrue');

    if (document.formValidate.chckBox.checked) {
        resultTrue.style.display = "none";
        alert("I agreed");
    } else {
        resultFalse.style.display = "block";
        resultTrue.style.display = "none";
        resultFalse.innerHTML = "You can't get past this box without ticking it.";
    }
}