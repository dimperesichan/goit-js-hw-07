const buttonIncrement = document.querySelector(
    '[data-action="increment"]');

const buttonDecrement = document.querySelector(
    '[data-action="decrement"]');

const spanValue = document.querySelector(
    "#value");

let counterValue = 0;

const increment = () => (
    spanValue.textContent = counterValue += 1);

const decrement = () => (
    spanValue.textContent = counterValue -= 1);

buttonIncrement.addEventListener(
    "click", increment);

buttonDecrement.addEventListener(
    "click", decrement);

    