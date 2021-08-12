function sum(data1, data2) {
    return data1 + data2;
}

function Calculate(pr1, pr2) {
    return sum(pr1, pr2) * sum(pr1, pr2);
}

function printScreen(par) {
    alert(par);
}

printScreen(Calculate(4, 5));
printScreen(Calculate(3, 3));
printScreen(Calculate(3, 1));
printScreen(Calculate(4, 7));
printScreen(Calculate(4, 4));
printScreen(Calculate(2, 2));