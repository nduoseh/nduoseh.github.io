$(function () {
  // pasang link
  $('.link').each(function () {
    var key = $(this).data('key');
    $(this).attr('href', CONFIG.link[key]);
  });
  
  
});