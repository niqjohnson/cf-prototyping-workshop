'use strict';

var notYet = {
  init: function() {
    var $placeholderLinks = $( 'a[href="#not-yet"]' ),
        $placeholderForms = $( 'form[action="#not-yet"]' );

    $placeholderLinks.on( 'click', function( event ) {
      event.preventDefault();
      alert( 'This link is just a placeholder' );
    });

    $placeholderForms.on( 'submit', function( event ) {
      event.preventDefault();
      alert( 'This form is just a placeholder' );
    });
  }
}

module.exports = notYet;
