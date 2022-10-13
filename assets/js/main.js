const shoppingList = [
    'Snack salati',
    'Acqua Naturale',
    'Hamburger',
    'Pizza'
];

const listEl = document.querySelector('.shopping_list');
let i = 0;
while (i<shoppingList.length){
    const listitem = shoppingList[i];
    console.log(listitem);
    const listItemMarkup = `<li>${shoppingList[i]}</li>`;
    listEl.insertAdjacentHTML('beforeend', listItemMarkup);
    i++
}