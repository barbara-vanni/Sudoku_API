let grid = fetch ('http://31.33.247.37:3000/api/sudoku')
.then(response => response.json())
.then(date=> {
    console.log(data);
    return date;
})
.catch(err => {
    console.log(err);
})


