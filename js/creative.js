/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function(){

// Typwriter Effect

  $(function(){
      $(".typewriter").typed({
        strings: ["Web Developer ^500"],
        typeSpeed: 80,
        backSpeed: 50,
      });
  });

    var velocity = 0.5;

    function update(){ 
        var pos = $(window).scrollTop(); 
        $('.container').each(function() { 
            var $element = $(this);
            // subtract some from the height b/c of the padding
            var height = $element.height()-18;
            $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
        }); 
    };

    $(window).bind('scroll', update);

// Contact Form

    var $contactForm = $('#contact-form');
    var $contactContainer = $('#contact-container');
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/ssamra67@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactContainer.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function(data) {
                $contactContainer.find('.alert--loading').hide();
                $contactContainer.append('<div class="alert alert--success">Message sent!</div>');
            },
            error: function(err) {
                $contactContainer.find('.alert--loading').hide();
                $contactContainer.append('<div class="alert alert--error">Oops, there was an error.</div>');
            }
        });
    });

});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
