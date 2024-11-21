"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function createPartialProduct(initialData) {
    var defaultProduct = {
        name: "Unnamed Product",
        price: 0.0,
        stock: 10,
    };
    return tslib_1.__assign(tslib_1.__assign({}, defaultProduct), initialData);
}
var partialProduct = createPartialProduct({
    name: "Cool NFT Item",
    price: 29.99,
    imageUrl: "https://example.com/cool.png",
});
console.log(partialProduct);
var minimalProduct = createPartialProduct({ name: "Mystery Item", price: 9.99 });
console.log(minimalProduct); // { name: "Mystery Item", price: 9.99, stock: 10 }
