function show() {
    //langs.length=982

    var langs = [
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
    ];

    var text = "",
        i;

    for (i = 0; i < langs.length; i++) {
        text += langs[i] + "<br>";
    }

    document.getElementById('result').innerHTML = text;
}