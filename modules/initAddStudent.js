import { students } from './students.js'
import { renderStudents } from './renderStudents.js'
import { formatInput } from './formatInput.js'
import { input } from '../index.js'
import { button } from '../index.js'

export const initAddStudent = () => {
    button.addEventListener('click', () => {
        input.classList.remove('error')

        if (input.value === '') {
            input.classList.add('error')
            return
        }

        const newStudents = { name: formatInput(input.value) }
        students.push(newStudents)
        input.value = ''
        renderStudents()
    })
}
