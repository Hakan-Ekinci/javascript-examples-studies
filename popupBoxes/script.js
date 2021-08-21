var result;
result = document.getElementById('result');

function boxes() {

    //alert("Javascript");
    var message, getValue;
    getValue = prompt("Please enter the course name.");
    if (getValue == null || getValue == "") {
        message = "This field cannot be left blank.";
    } else if (getValue == "Javascript") {
        message = "course name" + getValue + "you entered as and you got it right.";
    } else {
        message = "Where is this lesson" + getValue + "I explained the language of writing, for God's sake";
    }
    result.innerHTML = message;
}