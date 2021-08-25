var Btn = document.querySelector('#Btn');
var getIndex = document.querySelector('#city');
//var control = document.querySelector('#accept');
Btn.addEventListener("click", function() {
    //  alert(getIndex.selectedIndex);
    //var valueSelected = document.querySelector('#city')
    var valueSelected = getIndex.options[getIndex.selectedIndex].value;
    alert(valueSelected);
});