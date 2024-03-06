$(document).ready(function() {
    var telInput = $("#phoneInput");
    
    // Инициализация intlTelInput
    telInput.intlTelInput({
        initialCountry: "auto",
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.5.5/js/utils.js",
    });

    $('#phoneInput').on('input', function() {
        var value = $(this).val();
        var newValue = '';
        for (var i = 0; i < value.length; i++) {
            if (/\d/.test(value[i])) {
                newValue += value[i];
            }
        }
        $(this).val(newValue);
    });

    telInput.on("countrychange", function(e) {
        if (e && e.target) {
            $(e.target).removeAttr('placeholder'); // Удаление атрибута placeholder
        }
    });
});
