 // this is to set a greeting depending on time of day
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

    

// this is a funny script that is a proof of concept of a prompt textbox delivering an answer
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
// this asks how many cars the user wants to buy, with statements delivered based off of answer
function askQuantity() {
    var question = prompt('How many cars would you like?');
    console.log(typeof(question))
    var text;

    while (isNaN(question)) { //expect data type of number
        question = prompt('Please do not waste my time. Give a real number');
    }
    
        
    if(question === '1') {
        text = 'Excellent, let me draw up the paperwork';
    } else if (question > '1') {
        text = 'Big spender! Would you like some champagne?';
    } else if (question === '0') {
        text = 'No credit no car!';
    }
    
    return text;
}
// this is intended to be a while loop that keeps the textbox for cars up until a 'realistic' answer is given

    