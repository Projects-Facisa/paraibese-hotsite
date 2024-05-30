document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector(".card");
    var showRegisterBtn = document.getElementById("showRegisterBtn");
    var showLoginBtn = document.getElementById("showLoginBtn");

    showRegisterBtn.addEventListener("click", function() {
        card.classList.add("flip");

        document.getElementById("front").classList.add("disable-mouse-events")
        document.getElementById("back").classList.remove("disable-mouse-events")
    });

    showLoginBtn.addEventListener("click", function() {
        card.classList.remove("flip");

        document.getElementById("front").classList.remove("disable-mouse-events")
        document.getElementById("back").classList.add("disable-mouse-events")
    });     
});