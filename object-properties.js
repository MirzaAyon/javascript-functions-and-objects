var computer = {
    price: 12345,
    Storage: '15gb',
    processor: 'inter i5'
};
console.log(computer);
console.log(computer.processor);
var computerPrice = computer.price;
console.log(computerPrice);
//set a object property value
computer.price = 22000;
console.log(computer);

//different ways to set a value of an object property

computer.price = 22000; //way 1
computer["price"] = 23000; //way 2
var priceProperty = "price"; //way 3
computer[priceProperty] = 19000; //way 3
console.log(computer);


var storageProperty = 'Storage';
computer[storageProperty] = '512gb';
console.log(computer);
computer['Storage'] = '1tb';
computer.Storage = '5tb';
console.log(computer);

