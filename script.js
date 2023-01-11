function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function getCatFact() {
    fetch("https://catfact.ninja/fact/")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("catfact").innerHTML = data.fact;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
// Récupération des éléments
let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu");

// Ajout d'un écouteur d'événement pour afficher/masquer le menu lorsque le bouton est cliqué
menuButton.addEventListener("click", function() {
    menu.classList.toggle("show");
});
