/*var langs = [
    "PHP",
    "Asp. Net",
    "JSP",
    "ColdFusion",
    "Node JS",
    "Java",
    "C#",
    "Javascript",
    "Angular JS",
    "React JS",
    "Vue JS",
    "JQUERY",
    "MSSQL",
    "MySQL",
    "Bootstrap4"
]; */

function show() {
    var takeValue = document.getElementById('take').value;
    var message = "";
    switch (takeValue) {
        case "JS":
            message = "You have completed your education";
            break;
        case "Today":
            message = "Today is Sunday";
            break;
        default:
            message = "The letters you entered don't make any sense";

    }
    document.getElementById('result').innerHTML = message;
}