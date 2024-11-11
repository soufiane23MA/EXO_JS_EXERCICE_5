 
 
 /**
	* pour commencer j'appel mon élement html dans le DOM et 
	l'assigné a une variable 
	*/

  
const container = document.getElementById('citations-container');
/**
 * créer une boucle qui va parcourir l'objet quotes dans le fichier
 * quotes.js
 * dans le DOM avec la methode createlement(), je crée un nouveau élement div qui va contenir ma 
 * quotes (citation),et lui donner une classe.
 */
for (const auteur in quotes) {


	const citationBox = document.createElement('div');
	citationBox.className = 'citation-box';
	console.log(citationBox)
	/**
	 * je pareil pour le paragraphe et le titre qui contiendra 
	 * le nom de l'auteur
	 */

	const quoteText = document.createElement('p');
	quoteText.className = 'paragraphe';
	quoteText.textContent = `"${quotes[auteur]}"`;
	
	const autorName = document.createElement('h2');
	autorName.className = 'autor';
	autorName.textContent = auteur;
	/**
	 * avec la methode appenchild je rajoute dynamiquement les élement crées 
	 * au fichier html, 
	 */

	citationBox.appendChild(quoteText);
	citationBox.appendChild(autorName);
	container.appendChild(citationBox);
}