function verifyGrid() {
    if (gameRun === false) {
        return;
    }

    const sudokuGrid = document.getElementById("sudoku");

    const filledGrid = [];
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            const cell = sudokuGrid.rows[i].cells[j].querySelector('input');
            row.push(parseInt(cell.value));
        }
        filledGrid.push(row);
    }


    fetch('http://31.33.247.37:3000/api/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ grid: filledGrid })
    })
    .then(response => response.json())
    .then(data => {
        console.log (response.json())
        // Traitez la réponse de l'API backend ici
        // Par exemple, affichez un message indiquant si la grille est correcte ou non
    })
    .catch(error => {
        console.error('Erreur lors de la vérification de la grille :', error);
    });
}