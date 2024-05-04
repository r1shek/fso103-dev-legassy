const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-form-btn')
const output = document.querySelector('.js-form-result');

btn .addEventListener('click', onBtnClick) 

function onBtnClick() {
    const clientDate = new Date(input.value);
    const currentDate = new Date()
    const different = currentDate - clientDate;
    const result  = getAge(different)
    output.textContent = `Your age is ${result}  years old`

}

function getAge (ms) {
    return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25))
}