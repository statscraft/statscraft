$(document).ready(function() {

	//SMOOTH SCROLLING
  $('a[href*=#]:not([href=#])').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').stop(true, true).animate({ scrollTop: target.offset().top}, 500);
    }
    return false;
  });

	//Open links in new window
	$("a[rel=external]").each(function(){
		this.target = "_blank";
	});

	//default validate action
	$('form').attr('novalidate',true);

	$("a.print").click(function(){
		window.print();
		return false;
	});
	window.popitup = function (url) {
		newwindow=window.open(url,'name','height=600,width=850');
		if (window.focus) {newwindow.focus()}
		return false;
	}
});


