let currentNumber = 0; 

// Función para obtener el siguiente número par

function getNextEvenNumber(current) {
    return current + 2;
}

// Función para obtener el número par anterior

function getPreviousEvenNumber() {
    // Verifica si el número actual es mayor que 0 para evitar ir al negativo
    if (currentNumber > 0) {
        return currentNumber - 2;
    }
    return currentNumber; // Retorna el número actual si es 0
}

// Inicializa el número par

function init() {
    document.addEventListener("click", (e) => {
        if (e.button === 0 && !e.target.closest(".swicht")) { // Click izquierdo y no en el botón
            // Obtiene el siguiente número par y actualiza el contenido de <h1>
            currentNumber = getNextEvenNumber(currentNumber);
            document.querySelector("h1").textContent = currentNumber;
        }
    });

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault(); // Previene el menú contextual del clic derecho
        if (!e.target.closest(".swicht")) { // Clic derecho y no en el botón
            // Obtiene el número par anterior y actualiza el contenido de <h1>
            currentNumber = getPreviousEvenNumber();
            document.querySelector("h1").textContent = currentNumber;
        }
    });

    document.getElementById("input").addEventListener("change", () => {
        document.body.classList.toggle("light-mode");
    });
}

init();
