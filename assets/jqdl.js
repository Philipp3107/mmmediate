(function($) {
	$.extend($.easing,
	{
		easeW2DDropLine: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		}
	});

	$.fn.w2dDropLine = function(settings) {
		var config = {	'primary': '#navpri',
						'secondary': '#navsec',
						'tooltip': '.tooltip',
						'slidespeed': 250,
						'fadespeed': 400
		};
					
		if (settings) $.extend(config, settings);
	
		return this.each(function() {		
			$(config.primary).children('a').each(function(i) {
				$(config.primary).children(config.tooltip).eq(i).css({'left': $(this).position().left+(20+$(this).width())/2-80});
								if (i==0)
				{
					$(config.primary).children(config.tooltip).eq(i).css({'left': -18});
				}
								$(this).hover(function() {
					if (!$(this).hasClass('sel')) {
						$(config.primary).children('a').removeClass('sel');
						$(this).addClass('sel');
						$(config.secondary).children('div').stop(true,true).animate({'top':-34},{easing: 'easeW2DDropLine', duration:config.slidespeed});
						if ($(config.secondary).children('div').eq(i).children('a').length>0) {
							$(config.secondary).children('div').eq(i).animate({'top':0},{easing: 'easeW2DDropLine', duration:config.slidespeed});
						}
					}
					$(config.primary).children(config.tooltip).stop().hide();
					if ($(config.primary).children(config.tooltip).eq(i).html()!="") {
						$(config.primary).children(config.tooltip).eq(i).css({'top':'-80px','opacity':'0', 'display':'block'}).animate({'top':-90,'opacity':'0.975'},{easing: 'easeW2DDropLine',duration:config.fadespeed});
					}
				}, function() {
					$(config.primary).children(config.tooltip).stop().animate({'top':-100,'opacity':0},{easing: 'easeW2DDropLine',duration:config.fadespeed,complete:function(){
						$(this).hide();
					}});
				});
			});
		});
	};
})(jQuery);