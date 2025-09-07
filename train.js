// 1 задание
const minusEl = document.getElementById('minus')
const counterEl = document.getElementById('counter')
const plusEl = document.getElementById('plus')

let counter = 0

minusEl.addEventListener('click', () => {
    counterEl.innerHTML = `<h1> ${--counter}</h1>`
})

plusEl.addEventListener('click', () => {
    counterEl.textContent = ++counter
})

// 2 задание
const changeButtonEl = document.getElementById('changeTitle')
const titleEl = document.getElementById('students')

changeButtonEl.addEventListener('click', () => {
    if (titleEl.textContent === 'Студенты') {
        titleEl.textContent = 'Самые любимые студенты'
    } else {
        titleEl.textContent = 'Студенты'
    }
})

const addButtonEl = document.getElementById('addButton')
const listEl = document.getElementById('list')
const fieldEl = document.getElementById('field')
fieldEl.placeholder = 'Введите имя'

// addButtonEl.addEventListener('click', ()=>{
//         const newLiEl = document.createElement('li');
//         newLiEl.textContent='Анатолий';

//         listEl.appendChild(newLiEl);
//     })

addButtonEl.addEventListener('click', () => {
    if (fieldEl.value === '') {
        fieldEl.classList.add('error')
        return
    }

    fieldEl.classList.remove('error')

    const newLiEl = document.createElement('li')
    newLiEl.textContent = fieldEl.value

    listEl.appendChild(newLiEl)
    fieldEl.value = ''

    // addButtonEl.disabled = true;
    // fieldEl.disabled = true;
})

const removeButtonEl = document.getElementById('removeButton')

removeButtonEl.addEventListener('click', () => {
    listEl.lastChild.remove()
})

// const changeColorEl = document.getElementById('changeColor');

// changeColorEl.addEventListener('click', ()=>{
//     if (titleEl.style.color==='red') {
//         titleEl.style.color='black';
//     } else {
//         titleEl.style.color='red';
//     }
// })

const changeColorEl = document.getElementById('changeColor')

changeColorEl.addEventListener('click', () => {
    if (titleEl.classList.contains('titleColor')) {
        titleEl.classList.remove('titleColor')
    } else {
        titleEl.classList.add('titleColor')
    }
})

document.querySelectorAll('selector')
