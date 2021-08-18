function noteResult() {
    var midtermNote, finalNote, message, average;
    midtermNote = Number(document.getElementById('midterm').value);
    finalNote = Number(document.getElementById('final').value);
    average = midtermNote * 0.3 + finalNote * 0.7;


    if (isNaN(midtermNote)) {
        message = "You must enter a numeric value in the visa note.";
    } else if (isNaN(finalNote)) {
        message = "You must enter a numeric value in the final grade.";
    } else {
        if (average < 45 && average >= 0) {
            message = "You're out of support. Your result is FF";
        } else if (average >= 45 && average <= 60) {
            message = "your message: DD";
        } else if (average > 60 && average <= 80) {
            message = "your message: CC";
        } else if (average > 80 && average <= 90) {
            message = "your message: BB";
        } else if (average > 90 && average <= 100) {
            message = "your message: AA";
        } else {
            message = "The entered data is not within the grading range. Please enter grades in the range of 0-100.";
        }
    }

    document.getElementById('result').innerHTML = message;
}