// Accès à l'API pour les données de la grille
function fillGrid() {
    fetch('http://31.33.247.37:3000/api/sudoku')
        .then(response => response.json())
        .then(data => {
            const sudokuGrid = document.getElementById("sudoku");
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    const cellValue = data[i][j];
                    const cell = sudokuGrid.rows[i].cells[j].querySelector('input');
                    if (cellValue !== 0) {
                        cell.value = cellValue;
                        cell.readOnly = true;
                    } else {
                        cell.value = ''; // reinitilize empty cell
                        cell.readOnly = false; 
                    }
                }
            }
            // Start the timer when the game is on
            startTimer(); 
        })
        .catch(err => {
            console.log(err);
        });
}

// button new game 
const boutonNouvellePartie = document.getElementById("nouvellePartie");
boutonNouvellePartie.addEventListener("click", fillGrid);