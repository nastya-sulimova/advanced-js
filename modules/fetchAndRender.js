import { updateTasks } from "./students.js"
import { renderStudents } from "./renderStudents.js"

const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k'

export const fetchAndRender = () => {
    return fetch('https://wedev-api.sky.pro/api/v2/todos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response)=>{
            if (response.status === 401) {
                throw new Error("нет авторизации");
            }
            return response.json()
        })
        .then((data)=>{
            updateTasks(data.todos)
            renderStudents()
        })
        .catch((error)=>{
            if (error.message === 'нет авторизации') {
                alert('нет авторизации')
            }
        })
}