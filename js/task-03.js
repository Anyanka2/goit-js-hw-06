// Напиши скрипт для створення галереї зображень на підставі масиву даних.

// HTML містить список ul.gallery. <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgGalleryEl = document.querySelector(".gallery");
const imgItemsEl = document.querySelector("ul");
const imgEl = images
  .map(function ({ url, alt }) {
    return `<li><img src = "${url}" alt ="${alt}" width = "360" height = "220"></li>`;
  })
  .join("");
imgItemsEl.insertAdjacentHTML("afterbegin", imgEl);
//console.log(imgGalleryEl);

/*const imgGalleryEl = document.querySelector(".gallery");
//console.log(imgGalleryEl);
const arrayItems = [];
const imgItemsEl = images.forEach(image => {
 const itemEl = document.createElement("li");
itemEl.classList.add("gallery_item");
 //console.log(itemEl);
  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery_item-img");
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 360;
  imgEl.height = 220;
 //console.log(imgEl);
  itemEl.appendChild(imgEl);
  arrayItems.push(itemEl);
});
imgGalleryEl.append(...arrayItems);
console.log(imgGalleryEl);
*/
imgGalleryEl.style.cssText =
 `display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  `;
