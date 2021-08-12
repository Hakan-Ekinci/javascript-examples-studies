var langs = [
    "PHP",
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
var pc = [{
        type: "Asus",
        ram: "16gb",
        year: 2020
    },

    {
        type: "Asus",
        ram: "16gb",
        year: 2021
    },

    {
        type: "Asus",
        ram: "16gb",
        year: 2022
    },
];

Show('result',
    pc[0].type + "-" + pc[0].ram + "-" + pc[0].year + "<br>" +
    pc[1].type + "-" + pc[1].ram + "-" + pc[1].year + "<br>" +
    pc[2].type + "-" + pc[2].ram + "-" + pc[2].year);


function Show(par, par2) {
    document.getElementById(par).innerHTML = par2;
}