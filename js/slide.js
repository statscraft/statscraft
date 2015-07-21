$(document).ready(function() {
  var $slides = $(".slide-agenda-container");
  function agendaUpdater(){
    var now = new Date();
    $slides.each(function(){
      var $slide = $(this);
      var talkEndStringSplit = $slide.data("talk-end").split(":");
      var talkTime = new Date();
      talkTime.setHours(talkEndStringSplit[0]);
      talkTime.setMinutes(talkEndStringSplit[1]);
      $slide.toggleClass("slide-row-disabled", now > talkTime);
    });
  }
  setInterval(agendaUpdater, 60 * 1000);
  agendaUpdater();
});
