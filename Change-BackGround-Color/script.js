var Btn, result, count = 0;
Btn = document, querySelector('#Btn');
result = document.querySelector('#result');
Btn.addEventListener('click', function() {
    if (count % 2 === 0) {
        result.style.backgroundColor = "blue";
    } else {
        result.style.backgroundColor = "green";
    }
    count++;
});