const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsListEl = document.querySelector("#ingredients");
console.log(ingredientsListEl);
const ingredientsItemsEl = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = ingredient;
  //console.log(ingredientsEl);
  return ingredientsEl;
});
ingredientsListEl.append(...ingredientsItemsEl);

// const ingredientsListEl = document.querySelector('#ingredients');
// console.log(ingredientsListEl);

// const arrayItems = [];

// const ingredientsItemsEl = ingredients.forEach(ingredient => {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item');
//   ingredientsEl.textContent = ingredient;
//   // console.log(ingredientsEl);
//   arrayItems.push(ingredientsEl);
//   return arrayItems;
// });
// // console.log(arrayItems);
// ingredientsListEl.append(...arrayItems);

