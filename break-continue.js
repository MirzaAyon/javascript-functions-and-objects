var i = 0;
while (i < 10) {
    console.log(i);
    i++
}
//i er maan 5 hoye gele loop ta off hoye jabe
//niche
//loop er vitore condition likhbo
var i = 0;
while (i < 10) {
    console.log(i); //ekhane break point diye debug
    if (i == 5) {
        break;
    }
    i++
}
//watch e giye i likhe enter marlam
//5 er pore break hoye jabe debug e giye
//loop er modhe break mere dile shroto shotti hoye gelei sheta theme jabe 

for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
}
//i<=20 diyeo krbo
for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i > 8) {
        break;
    }
}


