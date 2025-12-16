function getAllTodos() {
    const apiUrl = "https://6941231c686bc3ca8165c454.mockapi.io/api/v1/todos"

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}