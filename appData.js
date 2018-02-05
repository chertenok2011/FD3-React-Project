let defCounter = 1;
let listArr = require('./products.json');

for (let i = 0; i < listArr.length; i++) {
    listArr[i].code = defCounter++
}

let data = {
    defCounter: defCounter,
    products: listArr
};

export default data;