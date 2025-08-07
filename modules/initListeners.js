import { students } from './students.js'
import { renderStudents } from './renderStudents.js'

export const initDeleteListeners = () => {
    const deleteElements = document.querySelectorAll('.delete')

    for (const deleteElement of deleteElements) {
        deleteElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const index = deleteElement.dataset.index
            students.splice(index, 1)
            renderStudents()
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
