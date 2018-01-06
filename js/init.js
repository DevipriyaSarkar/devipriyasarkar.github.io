(function($){
  $(function(){

      // fade out pre-loader on load after delayTime
      $(window).load(function() {
          var delayTime = 5000;
          var preLoader = $('#pre_loader');
          preLoader.delay(delayTime).fadeOut('slow');
      });

      // for the top header parallax effect
      $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
