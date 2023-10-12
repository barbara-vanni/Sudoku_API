// Access to API for the grid datas
let grid = fetch ('http://31.33.247.37:3000/api/sudoku')
.then(response => response.json())
.then(date=> {
    console.log(data);
    return date;
})
// Use data to fill the grid
// surement faire une petite bouboucle 
.catch(err => {
    console.log(err);
})



startTimer();





