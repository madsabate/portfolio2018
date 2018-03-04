$(document).ready(function () {
    $('.post').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset:300
    });
    $('.aboutContainer').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
    $('.profileImage').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
    $('.projectContainer').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
    $('.contactContainer').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    })

    $(function () {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true,
            draggable: true,
            onOpen: function (el) {}

        });
        $('.fixed-action-btn').openFAB();
        $('.fixed-action-btn').closeFAB();
        $('.fixed-action-btn.toolbar').openToolbar();
        $('.fixed-action-btn.toolbar').closeToolbar();
        $('#textarea1').val('New Text');
        $('#textarea1').trigger('autoresize');

    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});