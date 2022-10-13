const shoppingList = [
    'Snack salati',
    'Acqua Naturale',
    'Hamburger',
    'Pizza'
];

let i = 0;
while (i<shoppingList.length){
    const listElement = shoppingList[i];
    console.log(listElement);
    const listItem = `<li>${shoppingList[i]}</li>`;
    document.querySelector('ul').innerHTML = `${listItem}`;
    i++
}