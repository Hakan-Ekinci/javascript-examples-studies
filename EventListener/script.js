var Btn = document.querySelector('#Btn');
var result = document.querySelector('#result');
Btn.addEventListener("click", mClick);
Btn.addEventListener("click", mOtherClick);
//Btn.addEventListener("mouseover",mOver);
function mClick() {
    alert("This is the first click event");
}

function mOtherClick() {
    alert("This is the second click event");
}

//document.querySelector('#result').innerHTML="<span>Using with Function</span>";