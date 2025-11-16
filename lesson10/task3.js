// Перепишіть завдання 2, але використовуючи async/await.
// Створіть функцію getPostAndComments(), яка:
// Використовує await для очікування fetchPost() і fetchComments().
// Виводить отримані дані в консоль.
// Обробіть можливі помилки за допомогою try...catch.

// Функція для отримання першого поста (async/await версія)
async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response);
    const post = await response.json();
    console.log(post);
    return post;
}

// Функція для отримання коментарів до першого поста (async/await версія)
async function fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    console.log(response);
    const comments = await response.json();
    console.log(comments);
    return comments;
}

// Функція, яка отримує пост та коментарі
async function getPostAndComments() {
    try {
        console.log("Отримуємо пост...");
        // Використовуємо await для очікування fetchPost()
        const post = await fetchPost();
        console.log("Пост отримано:", post);
        
        console.log("\nОтримуємо коментарі...");
        // Використовуємо await для очікування fetchComments()
        const comments = await fetchComments();
        console.log("Коментарі отримано:", comments);
        console.log(`Кількість коментарів: ${comments.length}`);
        
        return { post, comments };
    } catch (error) {
        // Обробка можливих помилок
        console.error("Помилка при отриманні даних:", error);
        throw error;
    }
}

// Викликаємо функцію
getPostAndComments();
