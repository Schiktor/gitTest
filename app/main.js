const  cols = document.querySelectorAll('.col')

function generateRandomColor () {
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for(let i = 0; i < 6 ; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    
    return '#' + color
}

console.log(generateRandomColor ());


// function setRandomColors () {
// cols.forEach((col) => {
//     console.log(col);
// })
// }
// setRandomColors()