const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const textTitle = category.querySelector('h2').textContent;
    const liElement = category.querySelectorAll('ul li').length;

    console.log(`Category: ${textTitle}`);
    console.log(`Elements: ${liElement}`);
});