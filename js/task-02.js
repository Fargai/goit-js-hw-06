const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingsEl = document.querySelector("#ingredients");

// const elements = ingredients.map(ing => {
//   const ingredient = document.createElement("li");
//   ingredient.textContent = ing;
//   ingredient.classList.add("item");

//   return ingredient;
// })

// console.log(elements);

const makeListIngredients = ings => {
  return ings.map(ing => {
    const ingredient = document.createElement("li");
    ingredient.textContent = ing;
    ingredient.classList.add("item");

    return ingredient;
  });
};

const elements = makeListIngredients(ingredients);
ingsEl.append(...elements);