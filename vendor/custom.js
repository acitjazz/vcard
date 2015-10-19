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

$( "#header" ).mousemove(function( event ) {
  var msg = "Handler for .mousemove() called at ";
  msg += event.pageX + ", " + event.pageY;
    $("#headercontent").css('transform', 'translate(' + event.pageY /35 + 'px,' + -event.pageX /35+ 'px)');
});

var scene = document.getElementById('paralax');
var parallax = new Parallax(scene);

jQuery(document).ready(function($){
	  $('.webdesign').css('width', '90%');
	  $('.html5').css('width', '95%');
	  $('.css3').css('width', '100%');
	  $('.javascript').css('width', '80%');
	  $('.wordpress').css('width', '85%');
	  $('.php').css('width', '65%');
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

(function($) {
	$(document).ready(function() {

		/*=================================
		=            Particles            =
		=================================*/

		var $headerSizer, width, height, canvas, ctx, circles, animateHeader = true;

		if ($('#header').length > 0) {
			$headerSizer = $('#header');
		} else {
			$headerSizer = $('#header');
		}

		initHeader();
		addListeners();

		function initHeader() {
			width = $headerSizer.width();
			height = $headerSizer.height();

			canvas = document.getElementById('particles');
			canvas.width = width;
			canvas.height = height;
			ctx = canvas.getContext('2d');

			circles = [];
			for(var x = 0; x < width * 0.3; x++) {
				var c = new Circle();
				circles.push(c);
			}
			animate();
		}

		function addListeners() {
			window.addEventListener('scroll', scrollCheck);
			window.addEventListener('resize', resize);
		}

		function scrollCheck() {
			if (document.body.scrollTop > height) {
				animateHeader = false;
			} else {
				animateHeader = true;
			}
		}

		function resize() {
			width = $headerSizer.width();
			height = $headerSizer.height();
			canvas.width = width;
			canvas.height = height;
		}

		function animate() {
			if(animateHeader) {
				ctx.clearRect(0, 0, width, height);
				for(var i in circles) {
					circles[i].draw();
				}
			}
			requestAnimationFrame(animate);
		}

		function Circle() {
			var self = this;

			(function() {
				self.pos = {};
				init();
			})();

			function init() {
				self.pos.x = Math.random() * width;
				self.pos.y = height + Math.random() * 100;
				self.alpha = 0.1 + Math.random() * 0.3;
				self.scale = 0.1 + Math.random() * 0.3;
				self.velocity = Math.random();
			}

			this.draw = function() {
				if(self.alpha <= 0) {
					init();
				}
				self.pos.x += self.velocity;
				self.pos.y -= self.velocity;
				self.alpha -= 0.0005;
				ctx.beginPath();
				ctx.arc(self.pos.x, self.pos.y, self.scale * 10, 0, 2 * Math.PI, false);
				ctx.fillStyle = 'rgba(255,255,255,' + self.alpha + ')';
				ctx.fill();
			};
		}

	});

	(function() {
		var lastTime = 0;
		var vendors = ['webkit', 'moz'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame =
			window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
		}

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); },
					timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};

			if (!window.cancelAnimationFrame) {
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			}
		}

	}());

}(jQuery));

//FORM

