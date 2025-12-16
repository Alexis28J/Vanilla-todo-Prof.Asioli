function displayTodos(todos){

    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = "";

    for (const todo of todos) {
        
        const card = document.createElement('div');
        card.classList.add('todo-card');

        const descriptionSpan = document.createElement('span');
        descriptionSpan.appendChild(document.createTextNode(todo.description));

        card.appendChild(descriptionSpan);

        const detailBtn = document.createElement('button');
        detailBtn.append(document.createTextNode("➳"));
        detailBtn.classList.add("detail-btn");

        card.appendChild(detailBtn);

        todosContainer.appendChild(card);

    }

}


getAllTodos().then(results => displayTodos(results))