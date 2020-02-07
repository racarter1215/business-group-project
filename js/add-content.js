 
    var today = new Date();
    var hourNow = 23;
    var greeting;
    

    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Welcome!';
     }

    document.write(greeting);

    


function askConan() {
    var question = prompt('What is best in life? 1 = What would a programmer say? 2 = What would Conan say?');
    console.log(typeof(question))
    var text;
    
    if( question === '1') {
        text = 'Coding!';
    } else if (question === '2') {
        text = 'Crush your enemies, drive them before you, and hear the lamentations of their people';
    } else {
        text = 'Ur bad at stuff';
    }
    
    return text;
}

function askQuantity() {
    var question = prompt('How many cars would you like?');
    console.log(typeof(question))
    var text;
    
    if( question >= '1') {
        text = 'Excellent, let me draw up the paperwork';
    } else if (question >= '5') {
        text = 'Big spender! Would you like some champagne?';
    } else if (question = '0') {
        text = 'No credit no car!';
    }
    
    return text;
}

var question; 
    while (question > '7') {
    answer = prompt('Please do not waste my time. Give a real number');
    }
    