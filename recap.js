//variable
var favouriteBook = '4 hour work week';
//array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
console.log(bookList);
var shoeDogIndex = bookList.indexOf('shoe dog');
console.log(shoeDogIndex);
bookList[1] = 'story Brand';
//hooked ke vallage na tai hooked ke change kore story brand boshae dilam
console.log(bookList);

bookList.push('Small Giants');
console.log(bookList);
bookList.pop();
console.log(bookList);

//conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
} else {
    console.log('I am not hooked');
}

//while loop
var i = 0; //loop variable
// i  is consider as loop variable 
while (i < 15) {
    console.log(i);
    console.log('looping');
    i++;
}
//loop er vitore ichcha moto console.log dewa jabe

//for loop

for (var i = 0; i < 15; i++) {
    console.log(i);
}

