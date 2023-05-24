// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє
// його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
}
refs.inputEl.addEventListener('input', (event) => {
    refs.nameEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        refs.nameEl.textContent = 'Anonymous';
    }
});

