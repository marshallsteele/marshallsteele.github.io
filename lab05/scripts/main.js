function bookAppointment() {
    var modalEl = document.getElementById('bookingModal');
    var modal = bootstrap.Modal.getInstance(modalEl);

    var expert = $("#inputExpert option:selected").text();
    var date = $("#dateInput").datepicker().val();
    var petName = $("#inputPetName").val();

    if (validateForm()) {
        modal.hide();
        alert("Your appointment for " + petName + " with " + expert + " for " + date + " has been booked. Thank you for chosing Athos Veterinary!");
    } else {
        alert("All fields must be completed before booking an appointment. Please complete the form before submitting.");
    }
}

/*
=================================
VALIDATION METHODS
=================================
*/

function validateForm() {
    return (validatePhone("inputPhoneNumber") 
        && validateCreditCard("inputCreditCard")
        && validateRequiredField("inputPetName")
        && validateRequiredField("inputPetType")
        && validateRequiredField("inputFirstName")
        && validateRequiredField("inputLastName")
        && validateRequiredField("inputEmail"));
}

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return filter.test(a);
}

function validateCreditCard(txtCredit) {
    var a = document.getElementById(txtCredit).value;
    var filter = /^\d{4}[\s-]\d{4}[\s-]\d{4}[\s-]\d{4}$/;
    return filter.test(a);
}

function validateRequiredField(fieldId) {
    var a = document.getElementById(fieldId).value;
    return a.length !== 0;
}

/*
=================================
JQUERY SETUP AND LISTENERS
=================================
*/


var unavailableDates = [];
var pradaUnavail = [4, 5];
var ryanUnavail = [1];
var rachelUnavail = [3];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Disable weekends and unavailable days
    if (date.getDay() === 0 || date.getDay() === 6 || unavailableDates.includes(date.getDay()))
        return [false];
    else
        return [true];
}


$(document).ready(function(){

    /*
    -----------------------------
    Input validation
    -----------------------------
    */

    $("#inputPhoneNumber").on("focusout", function(){
        var toastEl = document.getElementById('phoneToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validatePhone("inputPhoneNumber")){
            toast.show();
            $("#inputPhoneNumber").removeClass("is-valid");
            $("#inputPhoneNumber").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputPhoneNumber").removeClass("is-invalid");
            $("#inputPhoneNumber").addClass("is-valid");
        }
    });

    $("#inputCreditCard").on("focusout", function(){
        var toastEl = document.getElementById('creditCardToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validateCreditCard("inputCreditCard")){
            toast.show();
            $("#inputCreditCard").removeClass("is-valid");
            $("#inputCreditCard").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputCreditCard").removeClass("is-invalid");
            $("#inputCreditCard").addClass("is-valid");
        }
    });

    $("#inputPetType").on("focusout", function(){
        var toastEl = document.getElementById('requiredFieldToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validateRequiredField("inputPetType")){
            toast.show();
            $("#inputPetType").removeClass("is-valid");
            $("#inputPetType").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputPetType").removeClass("is-invalid");
            $("#inputPetType").addClass("is-valid");
        }
    });

    $("#inputPetName").on("focusout", function(){
        var toastEl = document.getElementById('requiredFieldToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validateRequiredField("inputPetName")){
            toast.show();
            $("#inputPetName").removeClass("is-valid");
            $("#inputPetName").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputPetName").removeClass("is-invalid");
            $("#inputPetName").addClass("is-valid");
        }
    });
    
    $("#inputFirstName").on("focusout", function(){
        var toastEl = document.getElementById('requiredFieldToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validateRequiredField("inputFirstName")){
            toast.show();
            $("#inputFirstName").removeClass("is-valid");
            $("#inputFirstName").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputFirstName").removeClass("is-invalid");
            $("#inputFirstName").addClass("is-valid");
        }
    });

    $("#inputLastName").on("focusout", function(){
        var toastEl = document.getElementById('requiredFieldToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validateRequiredField("inputLastName")){
            toast.show();
            $("#inputLastName").removeClass("is-valid");
            $("#inputLastName").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputLastName").removeClass("is-invalid");
            $("#inputLastName").addClass("is-valid");
        }
    });

    $("#inputEmail").on("focusout", function(){
        var toastEl = document.getElementById('requiredFieldToast');
        var toast = bootstrap.Toast.getInstance(toastEl);

        if (!validateRequiredField("inputEmail")){
            toast.show();
            $("#inputEmail").removeClass("is-valid");
            $("#inputEmail").addClass("is-invalid");
        }
        else {
            toast.hide();
            $("#inputEmail").removeClass("is-invalid");
            $("#inputEmail").addClass("is-valid");
        }
    });

    /*
    -----------------------------
    Date Input Formatting
    -----------------------------
    */
    $("#inputExpert").on("change", function(){
        switch ($("#inputExpert option:selected").text()) {
            case "Dr. Jennifer Prada, DVM":
                unavailableDates = pradaUnavail;
                break;
            case "Ryan, RVT":
                unavailableDates = ryanUnavail;
                break;
            case "Rachel, VA":
                unavailableDates = rachelUnavail;
                break;
            default:
                unavailableDates = [];
                break;
        }
    });

    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before July 27th 2020
            minDate: new Date('06/27/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: disableDates
        }
    );
});