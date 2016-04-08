'use strict';

require( './utils/nemo' );
require( './utils/nemo-shim' );
require ( '../vendor/jquery.easing/js/jquery.easing.js' );
require ( '../vendor/cf-expandables/src/js/cf-expandables' );
require ( '../vendor/cf-tables/src/cf-tables' );

var sideNav = require( './utils/side-nav' );
var notYet = require( './utils/not-yet' );

$(document).ready( function () {

  // Trigger secondary navigation on content pages
  if ( $( '.nav-secondary' ).length > 0 ) {
    $( window ).resize( function() {
      sideNav.toggleCheck();
    } );

    sideNav.toggleCheck();
  }

  // Disable placeholder links and forms
  notYet.init();

  // Start writing your prototype's custom JS here


});
