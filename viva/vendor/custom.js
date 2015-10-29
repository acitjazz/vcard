
$(document).ready(function() {
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})						   
	$('ul.sf-menu').superfish();
	$('#menu').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce", //available with jQuery UI
		prependTo:'#nav-mobile'
	});
	
	$('.showPopup').magnificPopup({
	  type: 'inline',

	  fixedContentPos: false,
	  fixedBgPos: true,

	  overflowY: 'auto',

	  closeBtnInside: true,
	  preloader: false,
	  
	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'my-mfp-zoom-in'
	});
	
	 var owl = $(".slider");
	  owl.owlCarousel({
	    autoPlay : true,
	    singleItem : true,
	    addClassActive:true,
	    transitionStyle : "fadeUp"
	  });

});
	  
$(window).load(function() {

	  wow = new WOW(
		{
		  boxClass:     'wow',      // default
		  animateClass: 'animated', // default
		  offset:       0,          // default
		  mobile:       true,       // default
		  live:         true        // default
		}
	  )
	  wow.init();
});