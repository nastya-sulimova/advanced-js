import { students } from './students.js'
import { initDeleteListeners, initShowAge } from './initListeners.js'

export const renderStudents = () => {
    const app = document.getElementById('app')
    const studentsHtml = students
        .map((student) => {
            return `<li data-age="${student.age}"><span>${student.text}</span><button class="delete" data-id="${student.id}">удалить</button></li>`
        })
        .join('')

    const appHtml = `
        <h1>Список задач</h1>
        <ul id="list">${studentsHtml}</ul>

        <div>
            <h3>Форма добавления</h3>
            Имя:
            <input type="text" id="field" />
            <br /><br />
            <button type="button" id="add">Добавить</button>
        </div>
    `

    app.innerHTML = appHtml

    initDeleteListeners()
    initShowAge()

    console.log(renderStudents);
}
