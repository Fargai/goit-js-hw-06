const listCategories = document.querySelectorAll('.item');

const numberOfCategories = listCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

listCategories.forEach(function (element) {
    const category = element.firstElementChild.textContent;
    const elements = element.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);
});