// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити,
// колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх
// у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього
// на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

const refs = {
  createBtn: document.querySelector("[data-create]"),
  removeBtn: document.querySelector("[data-destroy]"),
  divForBoxes: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
};

refs.createBtn.addEventListener("click", onBtnCreateBox);
refs.removeBtn.addEventListener("click", onBtnRemoveBox);

function onBtnCreateBox() {
  let number = Number(refs.inputEl.value);
  const boxCollection = [];
  if (
    number >= refs.inputEl.attributes.min.value &&
    number <= refs.inputEl.attributes.max.value
  ) {
    for (let i = 0; i < refs.inputEl.value; i += 1) {
      const newBox = document.createElement("div");
      newBox.style.width = `${30 + i * 10}px`;
      newBox.style.height = `${30 + i * 10}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxCollection.push(newBox);
    }
    refs.divForBoxes.append(...boxCollection);
    console.log(refs.divForBoxes);
    refs.inputEl.value = ``;
  } else {
    alert("Введи число від 1 до 100");
  }
}

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return color;
}

function onBtnRemoveBox() {
  refs.divForBoxes.innerHTML = ``;
  refs.inputEl.value = "";
}
