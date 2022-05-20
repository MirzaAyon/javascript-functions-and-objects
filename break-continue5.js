//break 
var i = 0;
while (i < 10) {
    if (i == 4)
        break;
    console.log(i);
    i++;
}
//output 123

//continue
var i = 0;
while (i < 10) {
    if (i == 4)
        continue;
    console.log(i);
    i++;
}
//output 123456