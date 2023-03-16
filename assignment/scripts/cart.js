console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];

function isFull() {
    if (basket.length >= maxItems) {
        return true;
    }
    return false;
}

function addItem(item) {
    if (isFull()) {
        console.log('Your basket is full!');
        return false;
    } else {
        console.log('Item successfully added to basket.');
        basket.push(item);
        return true;
    } 
}

function removeItem(item) {
    let didIFindItem = false;
    for (const obj of basket) {
        if (obj === item) {
            didIFindItem = true;
        }
    }

    if (didIFindItem) {
        let itemIndex = basket.indexOf(item);
        let removedItem = basket.splice(itemIndex, 1);
        return removedItem;
    } else {
        return null;
    }
}

function listItems() {
    for ( obj of basket) {
        console.log(obj);
    }
}

function empty() {
    basket = []; 
}


//Test addItem function:
console.log('basket array should be empty:', basket);
addItem('apple');
addItem('banana');
addItem('orange');
console.log('basket array should now contain apple, banana, and orange:', basket);
console.log('addItem function should return true if item is succefully added:', addItem('watermelon'));
console.log(basket);

//Test listItems function:
console.log('list of items in the basket should appear below:');
listItems();

//Test empty function:
console.log('current basket array:', basket);
empty();
console.log('current basket array after empty() function has been used:', basket);

//Test isFull function:
basket = ['item1', 'item2', 'item3', 'item4', 'item5']; // changing basket to have 5 items.
console.log('isFull - should return true:', isFull());  // isFull should return true.
basket = ['item1', 'item2', 'item3'];                   // changing basket to have 3 items.
console.log('isFull - should return false:', isFull()); // isFull should return false.

//Test addItem function update:
basket = ['item1', 'item2', 'item3', 'item4', 'item5']; // changing basket to have 5 items.
console.log('addItem - should return false:', addItem('pizza'));  // addItem should return false.
console.log('verify pizza hasnt been added:', basket); //verify pizza hasn't been added to basket array.

basket = ['item1', 'item2', 'item3']; // changing basket to have 3 items.
console.log('addItem - should return true:', addItem('pizza'));  // addItem should return true.
console.log('verify pizza has been added:', basket); //verify pizza has been added to basket array.

//Test removeItem function:
basket = ['item1', 'item2', 'item3', 'item4', 'item5']; // changing basket to have 5 items.
console.log('current basket array:', basket);
console.log('removeItem() - expecting to return, item3:', removeItem('item3'));
console.log('current basket array with item3 removed from it:', basket);
console.log('removeItem() - expecting to return, null:', removeItem('item3'));
