function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none") {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "";
    } else {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
}