const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector("#ingredients");

const addIngredients = (options) => {
  return options.map((option) => {
    const navItemEl = document.createElement("li");
    navItemEl.classList.add("item");
    navItemEl.textContent = option;

    return navItemEl;
  });
};

const elements = addIngredients(ingredients);
ingredientsContainer.append(...elements);
