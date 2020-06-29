function animation() {
    document.getElementById("video").style.animationPlayState = "running";
    document.getElementById("button").style.display = "none";
    document.getElementById("main").style.animationPlayState = "running";
    if (document.getElementById("video").style.animationPlayState != "running") {
        document.getElementById("main").style.visibility ="visible";
    }
}