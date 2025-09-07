const host = 'https://wedev-api.sky.pro/api/v2/todos'

let token = ''

export const updateToken = (newToken) => {
    token=newToken
}

const authToken = 'https://wedev-api.sky.pro/api/user'

export function getTodos() {
    return fetch(host, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response)=>{
        return response.json()
    })
}

export function deleteTodo({id}) {
    return fetch(`${host}/${id}`, {
        method: 'DELETE',
        headers: {
           Authorization: `Bearer ${token}`
        }
    })
    .then((response)=>{
        return response.json()
    })
}

export function postTodo({newStudents}) {
    return fetch(host, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newStudents)
    })
    .then((response)=>{
        return response.json()
    })
}

export function login({login, password}) {
    return fetch(`${authToken}/login`, {
        method: 'POST',
        body: JSON.stringify({login, password})
    })
    .then((response)=>{
        return response.json()
    })
    // .catch((error) => {
    //     console.error('Произошла ошибка:', error);
    //     // Дополнительная обработка ошибок
    // })
}

export function registration({login, name, password}) {
    return fetch(authToken, {
        method: 'POST',
        body: JSON.stringify({login, name, password})
    })
    .then((response)=>{
        return response.json()
    })
}