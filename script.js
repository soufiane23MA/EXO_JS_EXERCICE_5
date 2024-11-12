 
 
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
const quoteId = 1;

for (const  quote of quotes) {

	const citationBox = document.createElement('div');
	citationBox.className = 'citation-box';
	citationBox.id =`quote : ${quoteId}`;
	 
	/**
	 * ici j'ai déclarer des variables qui vont contenir les 
	 * éléments crées et affécter le contenu dans la balise html
	 * 
	 */

	const quoteText = document.createElement('p');
	quoteText.className = 'paragraphe';
	quoteText.textContent = `"${quote.content}"`;
	
	const autorName = document.createElement('h2');
	autorName.className = 'autor';
	autorName.textContent = quote.author;

	const title = document.createElement('h3');
	title.className = 'title';
	title.textContent = `"${quote.title}"`;
	/**
	 * avec la methode appenchild je rajoute dynamiquement les élement crées 
	 * au fichier html, 
	 */
	
	citationBox.appendChild(quoteText);
	citationBox.appendChild(autorName);
	citationBox.appendChild(title);
	container.appendChild(citationBox);
	 
}