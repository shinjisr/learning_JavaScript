$(document).ready(function() {
  $('#menuBtn').on('click', function(evt) {
  $('.menuList').toggle('slow')
  console.log(evt.target.id);
  });

  $('.menuList li').hover(function(){
    $(this).toggleClass('current');
  });
})