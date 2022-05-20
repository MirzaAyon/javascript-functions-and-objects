//variabe declare
var skyColor = 'white';
//array declare
var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
//3rd index er item change kore onno ta diye dibo
phones[3] = 'walton';
//check an element exists in an array
//thakle index er maan 0 othoba tar beshi hbe r jodi na thake tahole -1 hbe  


//type - 1
if (phones.indexOf('oppo') == -1) {
    console.log('Oppo is missing');
} else {
    console.log('Have');
}


//type - 2
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available');
} else {
    console.log('not available');
}

//loop
var num = 0;
while (num <= 10) {
    num++;
}
//while loop
for (var i = 0; i < phones.length; i++) {

}
//function

function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}
addThreeNumbers(23, 45, 67);

//object
var microphone = {
    brand: 'blue lady',
    price: 120,
    color: 'black'
}
