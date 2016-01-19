'use strict';

require( './utils/nemo' );
require( './utils/nemo-shim' );
require ( '../vendor/jquery.easing/js/jquery.easing.js' );
require ( '../vendor/cf-expandables/src/js/cf-expandables' );

var sideNav = require( './utils/side-nav' );

$(document).ready( function () {

  // Trigger secondary navigation on content pages
  if ( $( '.nav-secondary' ).length > 0 ) {
    $( window ).resize( function() {
      sideNav.toggleCheck();
    } );

    sideNav.toggleCheck();
  }

  // Start writing your prototype's custom JS here
});
