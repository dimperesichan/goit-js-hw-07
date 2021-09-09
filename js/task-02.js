const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
const ingredientsReference = document.querySelector('#ingredients');

const addIngredient = (array)=> array.map(el=> {
    const itemOfListEl = document.createElement('li')
    itemOfListEl.textContent = el
    return itemOfListEl
  });

ingredientsReference.append(...addIngredient(ingredients))