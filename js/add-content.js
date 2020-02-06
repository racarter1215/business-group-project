var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'UR BAD AT STUFF';
} else {
    greeting = 'Welcome!' ;
}

document.write('<h1>' + greeting + '</h1>');

