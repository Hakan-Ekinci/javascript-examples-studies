var ID, Btn, resultFalse, resultTrue, odd = 0,
    even = 0,
    result, i;
ID = document.querySelector('#tc');
resultFalse = document.querySelector('#resultFalse');
resultFalse = document.querySelector('#resultTrue');
Btn = document.querySelector('#Btn');


Btn.addEventListener('click', function() {
    resultFalse.style.display = "block";
    if (ID.value == "") {
        resultFalse.textContent = "You cannot leave the ID number blank.";
    }
    if (ID.value.length !== 11) {
        resultFalse.textContent = "The ID number must be 11 digits.";
    } else if (isNaN(ID.value)) {
        resultFalse.textContent = "ID number must consist of numbers";
    } else if (ID.value[0] == 0) {
        resultFalse.textContent = "The first digit of the ID number cannot be zero."
    }
});