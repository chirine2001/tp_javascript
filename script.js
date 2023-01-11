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