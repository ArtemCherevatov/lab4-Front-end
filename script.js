/* ====================================================
   ЗАВДАННЯ 1: Зміна кольорів 4-го та 5-го елементів
   ==================================================== */

// Отримуємо 4-й елемент за допомогою getElementById
const element1 = document.getElementById('target-element');

// Отримуємо 5-й елемент за допомогою querySelector
const element2 = document.querySelector('.next-element');

// Змінні для відстеження стану кольору (щоб перемикати туди-сюди)
let isEl1Colored = false;
let isEl2Colored = false;

// Подія кліку для 4-го елемента
element1.addEventListener('click', () => {
    if (!isEl1Colored) {
        element1.style.backgroundColor = '#038f8f';
        element1.style.color = '#ffffff';
    } else {
        element1.style.backgroundColor = '';
        element1.style.color = '';
    }
    isEl1Colored = !isEl1Colored; // Змінюємо стан на протилежний
});

// Подія кліку для 5-го елемента
element2.addEventListener('click', () => {
    if (!isEl2Colored) {
        element2.style.backgroundColor = '#f5f503';
        element2.style.color = '#000000';
    } else {
        element2.style.backgroundColor = '';
        element2.style.color = '';
    }
    isEl2Colored = !isEl2Colored; // Змінюємо стан на протилежний
});


/* ====================================================
   ЗАВДАННЯ 2: Робота із зображенням
   ==================================================== */

const imgContainer = document.getElementById('image-container');
const btnAdd = document.getElementById('btn-add');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnDelete = document.getElementById('btn-delete');

// Змінна для зберігання поточної ширини (початкова 600px)
let currentWidth = 600;

// ДОДАТИ зображення
btnAdd.addEventListener('click', () => {
    // Перевіряємо, чи немає вже зображення на сторінці
    if (!document.getElementById('city-link')) {
        // Створюємо посилання
        const newLink = document.createElement('a');
        newLink.href = 'https://goturkiye.com/istanbul';
        newLink.target = '_blank';
        newLink.id = 'city-link';

        // Створюємо саме зображення
        const newImg = document.createElement('img');
        newImg.src = 'istanbul.jpg'; // Назва вашого файлу
        newImg.alt = 'Стамбул';
        newImg.id = 'city-image';
        newImg.width = currentWidth; // Встановлюємо поточну збережену ширину

        // Вкладаємо картинку в посилання, а посилання в контейнер
        newLink.appendChild(newImg);
        imgContainer.appendChild(newLink);
    }
});

// ВИДАЛИТИ зображення
btnDelete.addEventListener('click', () => {
    const linkElement = document.getElementById('city-link');
    if (linkElement) {
        linkElement.remove(); // Повністю видаляє блок із зображенням з DOM
    }
});

// ЗБІЛЬШИТИ зображення
btnIncrease.addEventListener('click', () => {
    const currentImg = document.getElementById('city-image');
    if (currentImg) {
        currentWidth += 50; // Збільшуємо на 50px
        currentImg.width = currentWidth;
    }
});

// ЗМЕНШИТИ зображення
btnDecrease.addEventListener('click', () => {
    const currentImg = document.getElementById('city-image');
    if (currentImg) {
        currentWidth -= 50; // Зменшуємо на 50px
        if (currentWidth < 50) currentWidth = 50; // Мінімальна межа, щоб не зникло зовсім
        currentImg.width = currentWidth;
    }
});