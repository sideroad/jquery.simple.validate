(function( $ ) {

module( "jquery.simpleValidate" );

var userId = {
        require : true,
        pattern : /^[\d\w]{4,32}$/
    },
    password = {
        require : true,
        pattern : /^.{6,32}$/
    },
    tel = {
        require : false,
        pattern : /^\d{2,4}-\d{2,4}-\d{4}$/
    };
    

test( "require", function() {
    var isValid = true;
    isValid = $("#userId").validate(userId);
    equals(isValid, false);
    

    isValid = $("#password").validate(password);
    equals(isValid, false);

    isValid = $("#tel").validate(tel);
    equals(isValid, true);
});

test( "pattern", function() {
    var isValid = true;
    isValid = $("#userId").val("tes").validate(userId);
    equals(isValid, false);
    isValid = $("#userId").val("test").validate(userId);
    equals(isValid, true);
    

    isValid = $("#password").val("abcde").validate(password);
    equals(isValid, false);
    isValid = $("#password").val("abcdef").validate(password);
    equals(isValid, true);

    isValid = $("#tel").val("1-1234-1234").validate(tel);
    equals(isValid, false);
    isValid = $("#tel").val("123-1234-1234").validate(tel);
    equals(isValid, true);
});

}( jQuery ) );