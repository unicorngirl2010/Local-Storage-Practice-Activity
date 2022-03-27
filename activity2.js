function back() {
    window.location = "index.html";
}

var score = 0;

function getScore() {
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = " <h1> Score : " + score + " </h1>";
}