var langs = ["PHP",
    "Asp.Net",
    "JSP",
    "NodeJS",
    "Javascript",
    "Angular JS",
    "React JS",
    "Vue JS",
    "HTML5",
    "CSS3"
];

document.getElementById('result').innerHTML = langs;

function Add() {
    langs[langs.length] = "MySQL";
    document.getElementById('result').innerHTML = langs;
}