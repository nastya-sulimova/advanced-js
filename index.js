import { renderStudents } from './modules/renderStudents.js'
import { initAddStudent } from './modules/initAddStudent.js'

renderStudents()

export const button = document.getElementById('add')
export const input = document.getElementById('field')

initAddStudent()
