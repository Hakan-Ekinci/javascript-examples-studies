function hideShow() {
    var getElement = document.querySelector('#picture');
    if (getElement.style.display == "none") {
        getElement.style.display = "block";
    } else {
        getElement.style.display = "none";
    }
}