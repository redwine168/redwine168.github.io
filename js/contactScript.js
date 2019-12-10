
// Function for validating the form in the HTML page
// The function ensures that all input fields contain valid input.
// This function is called in the HTML doc when the form submit button is clicked.
// If any of the input fields are invalid, errors are written to the DOM and
// the POST is stopped (by this function returning false)
// Otherwise, the function returns true and the POST is executed 
function validateForm() {
    // Retrieve input values from form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check to make sure each input is valid
    // If an input is invalid, set the 'goodToPost' var to false, which will prevent POST 
    var goodToPost = true;

    // Validate name 
    if (!validateName(name)) {
        event.preventDefault();
        goodToPost = false;
    }

    // Validate email 
    if (!validateEmail(email)) {
        goodToPost = false;
    }

    // Validat message
    if (!validateMessage(message)) {
        goodToPost = false;
    }

    // if none of the validations failed 
    if (goodToPost) {
        // prep email and open in new browser window
        var subject = "Portfolio message from " + name + "!";
        var body = message + "%0D%0A%0D%0ASend email to " + email + " to reply to this message.";
        var toSend = "mailto:jredwine@bu.edu?subject="+subject+"&body="+body;
        window.open(toSend);
    }
    return goodToPost
}


// Function for validating the input first name
// Checks to make sure a minimum of one character was entered
// Returns false if input does not satisfy condition
// returns true otherwise
function validateName(name) {
    // First check that at least two characters were entered  
    if (name.length < 1) {
        // return false (and show error) if input is too short
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("nameErrorMessage").innerHTML = "Please enter your name.";
        return false;
    }
    // Reset input field to get rid of error messages if valid input is submitted
    document.getElementById("name").style.borderColor = "gray";
    document.getElementById("nameErrorMessage").innerHTML = "";
    return true;
}



// Function for validating the email
// Checks to make sure input includes an '@' symbol
// Returns true if condition is satisfied
// returns false otherwise   
function validateEmail(email) {
    var hasAtSign = false;
    for (i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            hasAtSign = true;
        }
    }
    if (!hasAtSign) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailErrorMessage").innerHTML = "Email address must contain @ sign.";
        return false;
    }
    // Reset input field to get rid of error messages if valid input is submitted
    document.getElementById("email").style.borderColor = "gray";
    document.getElementById("emailErrorMessage").innerHTML = "";
    return true;
}


// Function for validating the message
// Checks if the message isn't empty
// Returns true if condition is satisfied
// Returns false otherwise 
function validateMessage(message) {
    if (message.length < 1) {
        // return false (and show error) if input is too short
        document.getElementById("message").style.borderColor = "red";
        document.getElementById("messageErrorMessage").innerHTML = "Please enter a message.";
        return false;
    }
    // Reset input field to get rid of error messages if valid input is submitted
    document.getElementById("message").style.borderColor = "gray";
    document.getElementById("messageErrorMessage").innerHTML = "";
    return true;
}
