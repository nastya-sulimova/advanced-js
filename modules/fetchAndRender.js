import { updateTasks } from "./students.js"
import { renderStudents } from "./renderStudents.js"
import { getTodos } from "./api.js"

const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k'

export const fetchAndRender = () => {
    return getTodos()
        .then((response)=>{
            if (response.status === 401) {
                throw new Error("нет авторизации");
            }
            console.log(response);
            return response.json()
        })
        .then((data)=>{
            updateTasks(data.todos)
            renderStudents()
            console.log(data.todos);
            
        })
        .catch((error)=>{
            if (error.message === 'нет авторизации') {
                alert('нет авторизации')
            }
        })
}