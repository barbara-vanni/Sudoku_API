// Access to API for the grid datas
let grid = fetch('http://31.33.247.37:3000/api/sudoku')
    .then(response => response.json())
    .then(date => {
        const sudokuGrid = document.getElementById("sudoku");
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cellValue = data[i][j];
                const cell = sudokuGrid.rows[i].cells[j].querySelector('input');
                if (cellValue !== 0) {
                    cell.value = cellValue;
                    cell.readOnly = true;
                }
            }
        }
        startTimer();
        console.log(data);
        return date;
    })
.catch (err => {
    console.log(err);
});








