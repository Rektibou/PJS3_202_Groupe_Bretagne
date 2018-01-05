// The plugin code
(function($){
  $.fn.parallax = function(options){
    var $$ = $(this);
    var offset = $$.offset();
    var defaults = {
      'start': offset.top,
      'stop': offset.top + $$.height(),
      'coeff': 0.95
    };
    var opts = $.extend(defaults, options);
    return this.each(function(){
      $(window).bind('scroll', function() {
        windowTop = $(window).scrollTop();
        if(((windowTop + $(window).height()) >= opts.start) && (windowTop <= opts.stop)) {
          newCoord = (windowTop - opts.start) * opts.coeff;
          $$.css({
              'background-position': '0 '+ newCoord + 'px'
          });
        }
      });
    });
  };
})(jQuery);
