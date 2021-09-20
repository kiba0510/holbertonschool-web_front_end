// 0. Lexical scoping and welcome message

function welcome(firstName, lastName) {

    let fullName = firstName + ' ' + lastName;
    
    // alert ('Welcome ' + firstName + lastName + '!');

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}
// displayFullName();