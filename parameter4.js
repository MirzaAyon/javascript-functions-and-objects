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
//run and debug var money = 250;
// var singara = bringSingara(money); ei 2 line e
//first e f10 marbo pore f11 marbo abr f10 marbo
//singara quantity er upr hover korle maan hoye geche 25