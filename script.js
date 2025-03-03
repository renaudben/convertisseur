// Récupération de l'élément où l'utilisateur entre le montant
const amountInput = document.getElementById("amount");

// Récupération de l'élément qui affichera le résultat de la conversion
const resultDisplay = document.getElementById("resultAmount");

// Ajout des événements de clic pour chaque bouton numérique
const numButtons = document.querySelectorAll(".num-btn");
numButtons.forEach(button => {
    // Au clic d'un bouton (balise button), on ajoute la valeur du bouton au champ texte
    button.addEventListener("click", function() {
        amountInput.value = amountInput.value + this.getAttribute("value");
    });
});

// Fonction pour supprimer un chiffre du champ texte
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    amountInput.value = amountInput.value.slice(0, -1); // On extrait le contenu du champ en excluant le dernier élément (Le)
});

// Fonction pour réinitialiser le champ texte et le résultat
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    amountInput.value = ""; // Vide le champ texte
    resultDisplay.textContent = "Résultat : 0"; // Réinitialise le texte du résultat
});

// Fonction pour convertir FCFA en EURO
const convertToEuroButton = document.getElementById("convertToEuro");
convertToEuroButton.addEventListener("click", function() {
    const xofAmount = parseFloat(amountInput.value); // Récupère le montant en FCFA
    const FCFA_to_Euro = 0.0015;
    const euroAmount = xofAmount * FCFA_to_Euro;
    resultDisplay.textContent = "Résultat : " + euroAmount.toFixed(2) + " EURO"; // Affiche le résultat
});

// Fonction pour convertir EURO en FCFA
const convertToXOFButton = document.getElementById("convertToXOF");
convertToXOFButton.addEventListener("click", function() {
    const euroAmount = parseFloat(amountInput.value); // Récupère le montant en EURO
    const Euro_to_FCFA = 655.957;
    const xofAmount = euroAmount * Euro_to_FCFA;
    resultDisplay.textContent = "Résultat : " + xofAmount.toFixed(0) + " FCFA"; // Affiche le résultat
});