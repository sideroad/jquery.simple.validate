/*!
 * jquery.simple.validate v1.1.1
 * http://sideroad.secret.jp/
 *
 * Simple Validation
 * 
 * Copyright (c) 2011 sideroad
 *
 * Dual licensed under the MIT or GPL licenses.
 * Date: 2011-08-20
 * 
 * @author sideroad
 * @requires jQuery
 * 
 */
(function( $ ){    
    
    $.fn.validate = function( setting ){
        var isValid = true;
        
        this.each(function(){
            var elem = $( this ),
                id = elem.attr( "id" ),
                val = elem.val(),
                elemValid = true,
                option = setting || elem.data("validate"),
                messageElem;
            
            if( !option ){
                return true;
            }
            
            // Require
            if( option.require && val.length == 0 ){
                elemValid = false;
            }
            
            // Match
            if( ( option.require || val.length != 0) &&  
                    option.pattern && 
                    !option.pattern.test( val ) ){
                elemValid = false;
            }
            
            // Valid 
            messageElem = ( option.messageElem ) ? option.messageElem : $( "#" + id + "-validate" );
            if( elemValid ) {
                messageElem.css( "display", "none" );
                elem.removeClass( "invalid" );
            } else {
                messageElem.css( "display", "block" );
                elem.addClass( "invalid" );
                isValid = false;
            }
        });
        
        return isValid;
    };
    
})( jQuery );