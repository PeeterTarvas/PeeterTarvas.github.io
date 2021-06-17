function changePicture() {
    if (document.getElementById("img").src.match("src/resources/minuPilt.jpg")) {
        document.getElementById("img").src = "src/resources/teine_pilt_minust.jpg";
    } else {
        document.getElementById("img").src = "src/resources/minuPilt.jpg";

    }
}