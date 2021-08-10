function show() {
    var day;
    var d = new Date().getDay();
    switch (5) {
        case 0:
            day = "Monday";
            break;
        case 1:
            day = "Tuesday";
            break;
        case 2:
            day = "Wednesday";
            break;
        case 3:
            day = "Thursday";
            break;
        case 4:
            day = "Friday";
            break;
        case 5:
            day = "Saturday";
            break;
        default:
            day = "there is no such day";

    }

    document.getElementById('result').innerHTML = day;
}