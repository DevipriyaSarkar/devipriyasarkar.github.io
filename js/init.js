(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.collapsible').collapsible();
        $(".typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            loop: true,
            loopCount: false,
            showCursor: true
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space