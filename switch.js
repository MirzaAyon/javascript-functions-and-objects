var color = 'yellow'

if (color == 'blue') {
    console.log('color is blue');
} //ekhane breakpoint dibo,f10 mere mere niche jabo
else if (color == 'red') {
    console.log('color is red');
}
else if (color == 'green') {
    console.log('color is green');
}
else if (color == 'white') {
    console.log('color is white');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
else {
    console.log('Color is Black');
}
//switch holo if else er shortcut and valo version

//syntax of switch
/*switch (expression) {
   case a:
       //code
       break;
   case b:
       //code 
       break;
   default:
   //code

}
*/
//use of switch case

switch (color) { //ager ta baad diye kehane ekta breakpoint dilam 
    case 'blue':
        console.log('color is blue'); //chaile eker odhik like likha jabe 
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');

}
//switch e bar bar check korena ekebare point e chole jae breakpoint dekhlei bujha jae
//but if/else e bar bar check kore