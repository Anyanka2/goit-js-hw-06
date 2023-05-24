// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const rangeInputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
rangeInputEl.addEventListener('input', () => {
    spanEl.style.fontSize = `${rangeInputEl.value}px`;
   //console.log(`${rangeInputEl.value}px`);
});

