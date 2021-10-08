// Metodos de slección

// let col1 = document.querySelectorAll('.col')
// console.log(col1)

// let col1 = document.getElementsByClassName('col1')
// console.log(col1)

// let col2 = document.getElementsByClassName('col2')
// console.log(col2)

// let col3 = document.getElementsByClassName('col3')
// console.log(col3)

// let col = document.getElementsByClassName('col')
// console.log(col)

// let row = document.getElementById('row')
// console.log(row)

let cols = document.getElementsByClassName('col')

cols[0].addEventListener('click', () => {
    if(cols[0].classList.contains('col-selector')){
        cols[0].classList.remove('col-selector')
    }else{
        cols[0].classList.add('col-selector')
    }
})

cols[1].addEventListener('click', () => {
    if(cols[1].classList.contains('col-selector')){
        cols[1].classList.remove('col-selector')
    }else{
        cols[1].classList.add('col-selector')
    }
})

cols[2].addEventListener('click', () => {
    if(cols[2].classList.contains('col-selector')){
        cols[2].classList.remove('col-selector')
    }else{
        cols[2].classList.add('col-selector')
    }
})