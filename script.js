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

queryUrl = 'https://catfact.ninja/breeds';
fetch(queryUrl)
	.then(response => response.json())
	.then(data => {
		// on récupère le tableau 'data' du json
		const messageData = data.data;
		// on crée des ensembles utiliser plus tard pour éviter la duplication
		const countrySet = new Set();
		const coatSet = new Set();
		// on récupère les éléments html
		const catCountryList = document.getElementById('select-country');
		const catCoatList = document.getElementById('select-coat');
		// on boucle sur les elements du tableau 'data' 
		for (const element of messageData) {
			if (!countrySet.has(element.country)) {
				countrySet.add(element.country); 
				// création de l'option du select avec le paramètre 'country' = pays
				const licountry = document.createElement('option');
				licountry.setAttribute('value', element.country);
				licountry.innerText = element.country;
				//ajout du pays comme option du select
				catCountryList.appendChild(licountry);
			}
			if (!coatSet.has(element.coat)) {
				coatSet.add(element.coat);
				// création de l'option du select avec le paramètre 'coat' = pelage
				const liCoat = document.createElement('option');
				liCoat.setAttribute('value', element.coat);
				liCoat.innerText = element.coat;
				//ajout du pelage comme option du select
				catCoatList.appendChild(liCoat);
			}
		}
	});






// Récupération des éléments
let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu");

// Ajout d'un écouteur d'événement pour afficher/masquer le menu lorsque le bouton est cliqué
menuButton.addEventListener("click", function () {
	menu.classList.toggle("show");
});


