document.addEventListener("DOMContentLoaded", function() {
    const knop = document.getElementById("ai-knop");
    const bericht = document.getElementById("ai-bericht");

    knop.addEventListener("click", function() {
        // Als het bericht verborgen is, laat het zien. Anders verberg het weer.
        if (bericht.classList.contains("hidden")) {
            bericht.classList.remove("hidden");
            knop.textContent = "Sluit bericht";
        } else {
            bericht.classList.add("hidden");
            knop.textContent = "Klik hier";
        }
    });
});
