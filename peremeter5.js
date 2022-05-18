function bringSingara(taka)
//raka input parameter
{
    console.log('singara er taka', taka);
    console.log('singara den');

    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;

}
var money = 250;
var singara = bringSingara(money);
console.log('These are singara');
//chaile evabe console log koreo singara'r maan ber kora jabe 
//first line theke breakpoint diye try kore dekhbo
//console.log('singara er taka', taka); and var money = 250; ei 2 line e brakpoint diye run and debug krlam +f10,f11,
// f10 porer step e jawa or ber hoye jawa 
//f11 vitore dhuka