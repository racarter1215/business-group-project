var today = new Date();
var hourNow = 23;
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'UR BAD AT STUFF';
} else {
    greeting = 'Welcome!';
}

document.write('<h1>' + greeting + '</h1>');

var question = prompt('What is best in life? (1 = What would a programmer say?, 2 = What would Conan say?)');
var reply;

if (question = 1) {
    reply = 'Coding';
} else if (question = 2) {
    reply = 'Crush your enemies, drive them before you, and hear the lamentations of their women!';
}

document.write('<h1>' + reply + '</h1>');