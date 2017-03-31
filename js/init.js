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

        var options = [
            {
                selector: '#projects', offset: 50, callback: function(el) {
                Materialize.showStaggeredList('#project-staggered-list');
            }
            },
            {
                selector: '#skills', offset: 50, callback: function (el) {
                $('.skill-container > div').each(function(){
                    var width = $(this).data('width');
                    $(this).animate({ width: width }, 1500);
                });
            }
            }
        ];
        Materialize.scrollFire(options);

    });

    $("#go-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

})(jQuery);