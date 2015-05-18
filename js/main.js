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
  //$("form").submit(function(event){
  //  event.preventDefault();
  //  var $form = $(this);
  //  $(".emailError")
  //    .add(".emailSuccess")
  //    .toggleClass("hidden", true);
  //  $.ajax({
  //  //    url: $form.attr('action'),
  //      url: "https://statscraft.wufoo.com/api/v3/forms/z1kivo4c108m4t6/entries.json",
  //      type: 'post',
  //      data: $form.serialize(),
  //      success: function(data) {
  //        $(".emailSuccess").removeClass("hidden");
  //      },
  //      error: function(data){
  //        $(".emailError").removeClass("hidden");
  //      }
  //  });
  //  return false;
  //});

  Eventbrite({'access_token': "BV6LSN5U7MHR3HTQ4BSC"}, function(eb_client){ 
    eb_client.event_get( {'id': '16933629943'}, function ( res ) { 
      var tickets = res.event.tickets,
          ticket = tickets[0].ticket,
          tickets_left = ticket.quantity_available - ticket.quantity_sold;
        $("#tickets_left").html(tickets_left);
    })
  });

});


