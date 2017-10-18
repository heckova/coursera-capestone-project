clicked = false;
window.onload = function () {
    button = document.getElementById("hamburger");
    image = document.getElementsByClassName("picture");
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

    for (i = 0; i < image.length; i++) {
        var picture = image[i];

        picture.onclick = function (hovno) {
            bigImage = document.getElementById("bigImage");
            var test = "url('./stylesheet/images/gallery/" + hovno.currentTarget.id + ".jpg')";
            bigImage.style.backgroundImage = "url('./stylesheet/images/gallery/" + hovno.currentTarget.id + ".jpg')";
        }

    }
}

window.onresize = function () {
    location.reload();
}




