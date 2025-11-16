/// Завдання 2:Напишіть функцію fetchPost(), яка виконує fetch-запит за першим постом з API:https://jsonplaceholder.typicode.com/posts/1
// Функція повертає Promise, що розрішується об'єктом post.
// Для обробки fetch() використайте then():
// Перший .then() перетворює відповідь у формат JSON.
// Другий .then() повертає отриманий об'єкт.
// 2. Напишіть функцію fetchComments(), яка отримує коментарі до першого поста:
// https://jsonplaceholder.typicode.com/comments?postId=1
// Функція повертає Promise, що розрішується масивом коментарів.
// Також використовуйте then(), як у fetchPost().


// Функція для отримання першого поста
function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        // Перший .then() перетворює відповідь у формат JSON
        .then(response => {
            console.log(response);
            return response.json();
        })
        // Другий .then() повертає отриманий об'єкт
        .then(post => {
            console.log(post);
            return post;
        });
}

// Функція для отримання коментарів до першого поста
function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        // Перший .then() перетворює відповідь у формат JSON
        .then(response => {
            console.log(response);
            return response.json();
        })
        // Другий .then() повертає отриманий масив коментарів
        .then(comments => {
            console.log(comments);
            return comments;
        });
}

fetchPost()
    
fetchComments()
   
