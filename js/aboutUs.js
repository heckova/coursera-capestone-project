clicked = false;
window.onload = function () {
    button = document.getElementById("hamburger");
    navigation = document.getElementsByTagName("nav")[0];

    button.onclick = function () {
        if (clicked == false) {
            navigation.style.display = "flex";
            clicked = true;
        } else {
            navigation.style.display = "none";
            clicked = false;
        }
    }
}

window.onresize = function () {
    location.reload();
}