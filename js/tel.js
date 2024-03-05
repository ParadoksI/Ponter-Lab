$(document).ready(function() {
    var telInput = $('#phoneInput');
    
    telInput.intlTelInput({
        initialCountry: 'auto',
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.5.5/js/utils.js",

    });


    var input = telInput[0];
    input.addEventListener("countrychange", function() {
        var countryData = telInput.intlTelInput("getSelectedCountryData");
        if (countryData && countryData.dialCode) {
            var countryCode = countryData.dialCode;
            var mask = countryCode.replace('+', '') + ' (999) 999-99-99';
            telInput.inputmask({ mask: mask });
        }
    });
    
});