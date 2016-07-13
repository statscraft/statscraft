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
  $("form").submit(function(event){
   event.preventDefault();
   var $form = $(this),
        error = false;

   if ( !$("#contact-name").val() ||
        !$("#contact-email").val() ||
        !$("#contact-phone").val() ||
        !$("#contact-feedback").val() )
   {
      error = true;
   }
   $(".emailSuccess").addClass("hidden");
   $(".emailError").addClass("hidden");
   if (error) {
    $(".emailError").removeClass("hidden");
    return;
   }
   $.ajax({
       url: "//formspree.io/info@statscraft.org.il",
       type: 'post',
       data: $form.serialize(),
       dataType: "json"
   }).then(function () {
      $(".emailSuccess").removeClass("hidden");
   });
   return false;
  });
  /*Eventbrite({'access_token': "ONOTGVFR47AZUS63IOMF"}, function(eb_client){
    eb_client.event_get( {'id': '26404502578'}, function ( res ) {
      var tickets = res.event.tickets,
          ticket = tickets[0].ticket,
          tickets_left = ticket.quantity_available - ticket.quantity_sold;
        $("#tickets_left").html(tickets_left);
    })
  });
*/
});


