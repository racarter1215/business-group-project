var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'UR BAD AT STUFF';
} else {
    greeting = 'Welcome!';
}

document.write('<h1>' + greeting + '</h1>');

var greeting = prompt('What is best in life? (1 = Wrong Answer 2 = Right Answer)');
var reply;

if (greeting = 1) {
    reply = 'Coding';
} else {
    reply = 'Crush your enemies, drive them before you, and hear the lamentations of their women!';
}

document.write('<body>' + reply + '</body>');