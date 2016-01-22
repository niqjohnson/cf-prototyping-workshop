(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../vendor/cf-expandables/src/js/cf-expandables":5,"../vendor/jquery.easing/js/jquery.easing.js":6,"./utils/nemo":3,"./utils/nemo-shim":2,"./utils/side-nav":4}],2:[function(require,module,exports){
'use strict';

// To play nicer with nemo, add js class to body element
var bodyTag = document.getElementsByTagName( 'body' )[0];
bodyTag.className += ' js';

$( '.toggle-menu' ).on( 'click', function( e ) {
  e.preventDefault();
  $( 'nav.main ul' ).toggleClass( 'vis' );
} );

},{}],3:[function(require,module,exports){
var linkElement, hidemenu, dropdown, dropping;

function escHandler(e) {
    if(e.keyCode == 27) {
        window.clearTimeout(countdown);
        var target = $("#interScreen p:first a").attr("href");
        $("#interScreen").remove();
        $('a[href="'+target+'"]').get(0).focus();
        $("body").unbind("keydown",escHandler);
        return false;
    }
    return true;
}

function dropMenu() {
  dropping = 1;
  $("#closeMenu").remove();
  var menuItem = $(linkElement);
  var target = menuItem.attr("href");
  var position = menuItem.offset().left - 1;
  $(target).css("left",position + "px");
  var position = menuItem.offset().top + menuItem.outerHeight();
  $(target).css("top",position + "px");
  $(target).append("<a id='closeMenu' class='close' href='#'>close menu</a>");
  $("a#closeMenu").click(function(e) {
    e.preventDefault();
    var myParent = $(this).parent().attr("id");
    hideMenu();
    $('a[href="#'+myParent+'"]').removeClass("active");
    $('a[href="#'+myParent+'"]').get(0).focus();
    $('a[href="#'+myParent+'"]').css("outline","none");
  });
  var height = $(target).show().height();
  $(target).hide().css('height', 0);
  $(target).show().animate({height: height}, 400, function() {
    dropping = 0;
  });
  $(target+" a:first").get(0).focus();
  $(target+" a:first").css("outline","none");
  menuItem.addClass("active");
  dropdown = 0;
}

function hideMenu() {
    $(".active").removeClass("active");
    $("#closeMenu").remove();
    $("#subnav nav").slideUp();
}

/* trigger when page is ready */
$(document).ready(function (){
    skipNav();
    $("#header nav a").mouseenter(function() {
        window.clearTimeout(hidemenu);
        var target = $(this).attr("href");
        if (($(target).css("display") == "none") || (target == "/")) {
            hideMenu();
            linkElement = this;
            dropdown = window.setTimeout(dropMenu, 500);
        }
        else {

        }
        return false;
    }).mouseleave(function() {
        hidemenu = window.setTimeout(hideMenu, 500);
        window.clearTimeout(dropdown);
        dropdown = 0;
    }).click(function(e) {
        if(dropping) {
            return false;
        }
        var clicked = $(this);
        var target = clicked.attr("href");
        if(target == "/") {
            return true;
        }
        if ( $(target).css("display") == "none") {
            if(!dropdown && !dropping) {
                hideMenu();
                linkElement = this;
                dropMenu();
            }
        }
        else {
            if(!dropping) {
                hideMenu();
            }
        }
        return false;
    });
    $("#subnav nav").mouseenter(function() {
        window.clearTimeout(hidemenu);
        window.clearTimeout(dropdown);
        var hovering = "#" + $(this).attr("id");
    }).mouseleave(function() {
        var hovering = "";
        hidemenu = window.setTimeout(hideMenu,500);
    });
    $(".inf input").keyup(function() {
      if ($(this).val()) {
        $(this).addClass("filled");
      }
      else {
        $(this).removeClass("filled");
      }
    });
    $(".inf textarea").keyup(function() {
      if ($(this).val()) {
        $(this).addClass("filled");
      }
      else {
        $(this).removeClass("filled");
      }
    });
    $(".signup,.signup2").submit(function() {
        var form = $(this);
        form.children("fieldset").children("p:last-child").children("button").attr("disabled","disabled");

        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: form.serialize(),
            complete: function(req, status_msg) {
                if(status_msg){
                    form.children("fieldset").hide();
                    var thanks;
                    if(form.attr("data-thanks")) {
                        thanks = form.attr("data-thanks");
                    }
                    else {
                        thanks = "Thanks, we'll be in touch.";
                    }
                    form.html("<p>"+thanks+"</p>");
                } else {
                    form.children("fieldset").hide();
                    form.append("<p>Something went wrong. Please try again later.</p>");
                }
            }
        });
        return false;
    });
    $("a > img").each(function() {
        $(this).parent().addClass("noStyles");
    });
    $(".mini a").mouseup(function(){
        var link = $(this).attr("href");
        link = link.replace("http://","/");
        link = link.replace("http://","/");
        var tracker = "/v/topshare"+link;
        _gaq.push(['_trackPageview',tracker]); });
    $(".botshare a").mouseup(function(){
        var link = $(this).attr("href");
        link = link.replace("http://","/");
        link = link.replace("http://","/");
        var tracker = "/v/botshare"+link;
        _gaq.push(['_trackPageview',tracker]);
    });
    $('iframe').each(function() {
        var url = $(this).attr("src")
        $(this).attr("src",url+"?wmode=transparent")
    });
    $('a[href$="pdf"]').each(function() {
        $(this).addClass("pdf");
    });
});

/* Skip nav to primary content link */

function skipNav() {
    var $skipLink = $('#skip-link');
    $skipLink.click(function() {
        $('#primary-content').focus();
    });
}


/* SEARCH BOX */
$(function(){

    // on page-load, determin the right placeholder color
    var searchLabelNd = $('#search_form label');
    if($('#search_form #query').val())
        searchLabelNd.fadeOut(50);
    else
        searchLabelNd.fadeIn(50);


    // placeholder text Behavior on focus and blur
    $('#search_form #query').focus(function(){
        if($(this).val())
            searchLabelNd.fadeOut(50);
        else
            searchLabelNd.fadeIn(50);
    });

    $('#search_form #query').keyup(function(){
        if($('#search_form #query').val())
            searchLabelNd.fadeOut(50);
        else
            searchLabelNd.fadeIn(50);
    });

    $('#search_form #query').blur(function(){
        if($(this).val() == ''){
            searchLabelNd.fadeIn(50);
        }else{
            searchLabelNd.fadeOut(50);
        }
    });

});

/* END SEARCH BOX */

},{}],4:[function(require,module,exports){
'use strict';

var sideNav = {
  toggleCheck: function() {
    var $navBtn = $( '.nav-secondary_link__button' ),
      $navContent = $( '.nav-secondary .expandable_content' ),
      $nav = $( '.nav-secondary.expandable' );

    // if button is visible, it's an expandable
    if ( $navBtn.css( 'display' ) !== 'none' &&
         !$nav.hasClass( 'expandable__expanded' )
    ) {
      // hide content if it's not expanded
      $navContent.css( 'display', 'none' );
    } else {
      $navContent.css( 'display', 'block' );
    }
  }
}

module.exports = sideNav;

},{}],5:[function(require,module,exports){
/**
 * cf-expandables
 * https://github.com/cfpb/cf-expandables
 *
 * A public domain work of the Consumer Financial Protection Bureau
 */

(function( $ ) {

  $.fn.expandable = function( userSettings ) {

    return $( this ).each(function() {

      var $this = $( this ),
          $target = $this.find('.expandable_target').not( $this.find('.expandable .expandable_target') ),
          $cueOpen = $this.find('.expandable_cue-open').not( $this.find('.expandable .expandable_cue-open') ),
          $cueClose = $this.find('.expandable_cue-close').not( $this.find('.expandable .expandable_cue-close') ),
          $content = $this.find('.expandable_content').not( $this.find('.expandable .expandable_content') ),
          $groupParent = $this.parents('.expandable-group'),
          accordion = $groupParent.length > 0 && $groupParent.data('accordion');

      if ( accordion ) {
        var $siblings = $this.siblings('.expandable');
      }

      this.init = function() {
        // Todo: recommend using an id on all expandables so that we can use
        // the aria-controls attribute.
        $target.attr( 'aria-controls', $content.attr('id') );
        if ( $this.hasClass('expandable__expanded') ) {
          this.expand( 0 );
        } else {
          this.collapse( 0 );
        }
        $target.on( 'click', $.proxy( this.handleClick, this ) );
      };

      this.handleClick = function( ev ) {
        ev.preventDefault();
        ev.stopPropagation();
        this.toggle();
        if ( accordion ) {
          $siblings.each( function( index, sibling ) {
            sibling.collapse();
          });
        }
      };

      this.toggle = function() {
        if ( $target.attr('aria-pressed') === 'true' ) {
          this.collapse();
        } else {
          this.expand();
        }
      };

      this.expand = function( duration ) {
        $cueOpen.css( 'display', 'none' );
        $cueClose.css( 'display', 'inline' );
        $content.attr( 'aria-expanded', 'true' );
        $target.attr( 'aria-pressed', 'true' );
        if ( typeof duration === 'undefined' ) {
          duration = $.fn.expandable.calculateExpandDuration( $content.height() );
        }
        $this.addClass('expandable__expanded');
        $content.slideDown({
          duration: duration,
          easing: 'easeOutExpo'
        });
      };

      this.collapse = function( duration ) {
        $cueOpen.css( 'display', 'inline' );
        $cueClose.css( 'display', 'none' );
        $content.attr( 'aria-expanded', 'false' );
        $target.attr( 'aria-pressed', 'false' );
        if ( typeof duration === 'undefined' ) {
          duration = $.fn.expandable.calculateCollapseDuration( $content.height() );
        }
        $this.removeClass('expandable__expanded');
        $content.slideUp({
          duration: duration,
          easing: 'easeOutExpo'
        });
      };

      this.init();

    });

  };

  $.fn.expandable.calculateExpandDuration = function( height ) {
    return $.fn.expandable.constrainValue( 450, 900, height * 4 );
  };

  $.fn.expandable.calculateCollapseDuration = function( height ) {
    return $.fn.expandable.constrainValue( 350, 900, height * 2 );
  };

  $.fn.expandable.constrainValue = function( min, max, duration ) {
    if ( duration > max ) {
        return max;
    } else if ( duration < min ) {
        return min;
    } else {
        return duration;
    }
  };

  // Auto init
  $('.expandable').expandable();

}(jQuery));

},{}],6:[function(require,module,exports){
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
},{}]},{},[1])


//# sourceMappingURL=main.js.map
