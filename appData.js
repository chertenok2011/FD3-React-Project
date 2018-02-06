let defCounter = 1;
let listArr = require('./products.json');
let card = [];

for (let i = 0; i < listArr.length; i++) {
    listArr[i].code = defCounter++
}

let data = {
    defCounter: defCounter,
    products: listArr,
    card: card
};

export default data;