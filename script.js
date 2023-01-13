function darkMode() {
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
		const breedSet = new Set();
		const coatSet = new Set();
		// on récupère les éléments html
		const catBreedList = document.getElementById('select-breed');
		const catCoatList = document.getElementById('select-coat');
		// on boucle sur les elements du tableau 'data' 
		for (const element of messageData) {
			if (!breedSet.has(element.breed)) {
				breedSet.add(element.breed);
				// création de l'option du select avec le paramètre 'breed' = pays
				const liBreed = document.createElement('option');
				liBreed.setAttribute('value', element.breed);
				liBreed.innerText = element.breed;
				//ajout du pays comme option du select
				catBreedList.appendChild(liBreed);
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

function catFeatures() {
	selectBreedElmt = document.getElementById("select-breed");
	catBreedSelected = selectBreedElmt.options[selectBreedElmt.selectedIndex].value;

	selectCoatElmt = document.getElementById("select-coat");
	catCoatSelected = selectCoatElmt.options[selectCoatElmt.selectedIndex].value;

	queryUrl = 'https://catfact.ninja/breeds';
	fetch(queryUrl)
		.then(response => response.json())
		.then(data => {
			const messageData = data.data;
			const filteredBreedData = messageData.filter(element => element.breed === catBreedSelected);
			if (selectBreedElmt.selectedIndex = 0) {
				const filteredCoatData = filteredBreedData.filter(breed => breed.coat === catCoatSelected);
				cat = filteredCoatData[0]
			}else{
				cat = filteredBreedData[0]
			}

			const explanationElement = document.getElementById('explain');

			if (cat != null) {
				explanationElement.innerText = 'Breed: ' + cat.breed + '\n Country of origin: ' + cat.country + ' \n Place of origin: ' + cat.origin + '\nCoat: ' + cat.coat + '\nPattern: ' + cat.pattern;
			} else {
				explanationElement.innerText = 'Nothing found for the breed ' + catBreedSelected + ' associated to the ' + catCoatSelected + ' coat';
			}
		});
}



// Récupération des éléments
let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu");

// Ajout d'un écouteur d'événement pour afficher/masquer le menu lorsque le bouton est cliqué
menuButton.addEventListener("click", function () {
	menu.classList.toggle("show");
});


