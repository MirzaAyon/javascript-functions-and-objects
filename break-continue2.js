var numbers = [23, 34, 45, 56, 67, 78, 100, 123, 453, 89, 90];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
}
/////////////////////
var numbers = [23, 34, 45, 56, 67, 100, 123, 453, 78, 89, 90];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 100) {
        break;
    }
}
//100 er upr paile sheta show kore loop ta bondho hoye jabe 