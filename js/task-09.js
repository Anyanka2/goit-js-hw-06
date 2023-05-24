// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change-color і 
// виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const refs = {
  spanColorEl: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};
refs.changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.spanColorEl.textContent = color;
});

