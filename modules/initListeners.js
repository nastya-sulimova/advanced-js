import { fetchAndRender } from './fetchAndRender.js'
import { formatInput } from './formatInput.js'
import { input } from '../index.js'
import { button } from '../index.js'

export const initDeleteListeners = () => {
    const deleteElements = document.querySelectorAll('.delete')

    for (const deleteElement of deleteElements) {
        deleteElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = deleteElement.dataset.id

            deleteElement.disabled = true
            deleteElement.textContent = 'Задача удаляется...'

            fetch(`https://wedev-api.sky.pro/api/todos/${id}`, {
                method: 'DELETE'
            }).then(()=>{
                // return Promise.reject('опять что- не так')
                return fetchAndRender()
            }).then(() => {
                deleteElement.disabled = false
                deleteElement.textContent = 'Удалить'
            })
            .catch((error)=>{
                console.log(error);
            })
        })
    }
}

export const initShowAge = () => {
    const studentsElements = document.querySelectorAll('li')

    for (const studentElement of studentsElements) {
        studentElement.addEventListener('click', () => {
            const age = studentElement.dataset.age
            alert(`Возраст студента - ${age}`)
        })
    }
}


export const initAddStudent = () => {
    button.addEventListener('click', () => {
        input.classList.remove('error')

        if (input.value === '') {
            input.classList.add('error')
            return
        }

        const newStudents = { text: formatInput(input.value) }
        // students.push(newStudents)

        button.disabled = true
        button.textContent = 'Создание задачи...'

        fetch('https://wedev-api.sky.pro/api/todos', {
            method: 'POST',
            body: JSON.stringify(newStudents),
        })
        .then((response)=>{
             if (response.status === 400){
                throw new Error('Задачу "ничего" создать нельзя, займитесь чем-нибудь полезным');
            }
            return response.json()
        })
        .then(()=>{
            return fetchAndRender()
        })
        .then(()=>{
            button.disabled = false
            button.textContent = 'Добавить'

            input.value = ''
        })
        .catch((error)=>{
            // console.log(error);
            alert(error.message)
        })
        input.value = ''
        // renderStudents()
    })
}
