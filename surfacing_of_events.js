const button = document.getElementById('add')
const list = document.getElementById('list')
const removeButton = document.getElementById('remove')
const input = document.getElementById('field')

const students = [
    { name: 'Глеб', age: 20 },
    { name: 'Иван', age: 30 },
    { name: 'Люси', age: 40 },
]

const initDeleteListeners = () => {
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

const initShowAge = () => {
    const studentsElements = document.querySelectorAll('li')

    for (const studentElement of studentsElements) {
        studentElement.addEventListener('click', () => {
            const age = studentElement.dataset.age
            alert(`Возраст студента - ${age}`)
        })
    }
}

const renderStudents = () => {
    const studentsHtml = students
        .map((student, index) => {
            return `<li data-age="${student.age}"><span>${student.name}</span><button class="delete" data-index="${index}">удалить</button></li>`
        })
        .join('')

    list.innerHTML = studentsHtml

    initDeleteListeners()
    initShowAge()
}

renderStudents()

button.addEventListener('click', () => {
    input.classList.remove('error')

    if (input.value === '') {
        input.classList.add('error')
        return
    }

    const newStudents = {
        name: input.value.replaceAll('<', '&lt').replaceAll('>', '&gt'),
    }
    students.push(newStudents)
    input.value = ''
    renderStudents()
})
