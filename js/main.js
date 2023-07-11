document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform form validation and submit the data to the server
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var accountName = document.getElementById("account-name").value;
    var companyName = document.getElementById("company-name").value;
    var termsAccepted = document.getElementById("terms").checked;
    var policyAgreed = document.getElementById("company-policy").checked;
    var newsletterSubscribed = document.getElementById("newsletter").checked;

    // Perform additional validation as per requirements
    
    // Submit the form data to the server
    

    // Clear the form fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    document.getElementById("account-name").value = "";
    document.getElementById("company-name").value = "";
    document.getElementById("terms").checked = false;
    document.getElementById("company-policy").checked = false;
    document.getElementById("newsletter").checked = false;
});