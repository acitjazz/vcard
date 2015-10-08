/*
Theme Name: VCARD
Author: Acit Jazz
Version: 1.0
*/

$(function(){
  $('.autoheight').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  $('.autoheights').css({ height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
	$('.autoheight').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  $('.autoheights').css({ height: $(window).innerHeight() + 'px' });
  });
});
$(document).ready(function() {  
      $("#owl-portfolio").owlCarousel({
        navigation : true
      });
});
jQuery(document).ready(function($){
	$(window).stellar();
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});
	  $(".rotate").Morphext({
		animation: 'flipInX'
	  });
	$('a.pentagon').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 2000);
		return false;
	 });
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;
	hideBlocks(timelineBlocks, offset);
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});
	  
$(window).load(function() {
	wow = new WOW(
	{
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       true,       // default
	  live:         true        // default
	})
	wow.init();
});