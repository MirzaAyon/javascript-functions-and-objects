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

// practice

প্রাকটিস চ্যালেঞ্জ(৪ টি প্রব্লেম): 

১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা(multiplication table) আউটপুট হিসেবে দেখাবে। 



২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 



৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  



—----------

    Extra

—--------------

৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা:



const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}

এবং pepperoni প্রিন্ট করবা।


