$(document).ready(function() {
  var $slides = $(".slide-agenda-container");
  function agendaUpdater(){
    var now = new Date();
    $slides.each(function(){
      var $slide = $(this);

      var talkEndStringSplit = $slide.data("talk-end").split(":");
      var talkStartStringSplit = $slide.data("talk-start").split(":");

      var talkTimeEnd = new Date();
      talkTimeEnd.setHours(parseInt(talkEndStringSplit[0]));
      talkTimeEnd.setMinutes(parseInt(talkEndStringSplit[1]));

      var talkTimeStart = new Date();
      talkTimeStart.setHours(parseInt(talkStartStringSplit[0]));
      talkTimeStart.setMinutes(parseInt(talkStartStringSplit[1]));

      $slide.toggleClass("slide-row-been", now > talkTimeEnd);
      $slide.toggleClass("slide-row-current", now > talkTimeStart && now < talkTimeEnd);
      $slide.toggleClass("slide-row-coming", now < talkTimeStart);
    });
  }
  setInterval(agendaUpdater, 60 * 1000);
  agendaUpdater();
});
